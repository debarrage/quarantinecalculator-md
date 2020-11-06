import { initStore } from "..";
import { nextQuestionAction } from "../actions";

describe("Test flow reducer logic", () => {
    let store = initStore();
    const next = (result?: number | boolean) => {
        store.dispatch(nextQuestionAction({ result }));
    }

    beforeEach(() => store = initStore());

    it("Should correctly calculate 'rf2', 0 days ago", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(false); // r11n
        next(true); // r5y
        next(true); // r6y
        next(true); // r7
        next(0); // rf2
        
        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        
        expect(actual.id).toBe("rf2");
        expect(quarantine.days).toBe(7);
        
    });

    it("Should correctly calculate 'rf2', 4 days ago", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(false); // r11n
        next(true); // r5y
        next(true); // r6y
        next(true); // r7
        next(-4); // rf2
        
        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        
        expect(actual.id).toBe("rf2");
        expect(quarantine.days).toBe(7-4); 
    });

    it("Should correctly calculate 'rf3', no r3, 0 days", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(true); // r2y
        next(false); // r3
        next(false); // r10
        next(0); // rf3

        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("rf3");
        expect(quarantine.days).toBe(10); 
    });

    it("Should correctly calculate 'rf3', no r3, 3 days", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(true); // r2y
        next(false); // r3
        next(false); // r10
        next(-3); // rf3

        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("rf3");
        expect(quarantine.days).toBe(7); 
    });

    it("Should correctly calculate 'rf3', yes r3, no home quarantine", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(true); // r2y
        next(false); // r3
        next(true); // r4
        next(0); // r8
        next(false); // rf3

        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("rf3");
        expect(quarantine.days).toBe(17); 
    });

    it("Should correctly calculate 'rf3', yes r3, no home quarantine", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(true); // r2y
        next(false); // r3
        next(true); // r4
        next(-4); // r8
        next(false); // rf3

        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("rf3");
        expect(quarantine.days).toBe(13); 
    });

    it("Should correctly calculate 'rf3', yes r3, home quarantine", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(true); // r2y
        next(false); // r3
        next(true); // r4
        next(-4); // r8
        next(true); // r9n
        next(0);

        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("rf3");
        expect(quarantine.days).toBe(10); 
    });

    it("Should correctly calculate 'rf3', yes r3, home quarantine", () => {
        // Act - Path to rf2
        next(); // 1
        next(false); // r1
        next(true); // r2y
        next(false); // r3
        next(true); // r4
        next(-2); // r8
        next(true); // r9n
        next(-2);

        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("rf3");
        expect(quarantine.days).toBe(8); 
    });

    it("Should correctly calculate 'sf6'", () => {
        // Act - Path to rf2
        next(); // 1
        next(true); // s1
        next(false); // s11
        next(false); // s2n
        next(true); // s3y
        next(0); // s4;
        next(true); // s5y
        next(true); // s6y
        next(true); // s7y
        next(true);
        
        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("sf6");
        expect(quarantine.days).toBe(7); 
        expect(quarantine.designation).not.toBeUndefined();
    });

    it("Should correctly calculate 'sf6', geen klachten", () => {
        // Act - Path to rf2
        next(); // 1
        next(true); // s1
        next(false); // s11
        next(false); // s2n
        next(true); // s3y
        next(-5); // s4;
        next(true); // s5y
        next(true); // s6y
        next(true); // s7y
        next(true);
        
        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("sf6");
        expect(quarantine.days).toBe(2); 
        expect(quarantine.designation).not.toBeUndefined();
    });

    it("Should correctly calculate 'sf6', no zorgpersoneel", () => {
        // Act - Path to rf2
        next(); // 1
        next(true); // s1
        next(false); // s11
        next(false); // s2n
        next(true); // s3y
        next(0); // s4;
        next(true); // s5y
        next(true); // s6y
        next(true); // s7y
        next(false); // s10
        next(false);
        
        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("sf6");
        expect(quarantine.days).toBe(7); 
        expect(quarantine.designation).toBeUndefined();
    });

    it("Should correctly calculate 'sf6', zorgpersoneel", () => {
        // Act - Path to rf2
        next(); // 1
        next(true); // s1
        next(false); // s11
        next(false); // s2n
        next(true); // s3y
        next(0); // s4;
        next(true); // s5y
        next(true); // s6y
        next(true); // s7y
        next(false); // s10
        next(true);
        
        const actual = store.getState().flow.current;
        const quarantine = store.getState().quarantine;

        // Assert
        expect(actual.id).toBe("sf6");
        expect(quarantine.days).toBe(7); 
        expect(quarantine.designation).not.toBeUndefined();
    });

    it("Should correctly calculate 'sf6', with relay", () => {
        // Act - Path to rf2
        next(); // 1
        next(true); // s1
        next(false); // s11
        next(true); // s2n
        next(true); // s3y
        next(0); // s4;
        next(true); // s5y
        next(true); // s6y
        next(true); // s7y
        next(true); // via relay
                
        const actual = store.getState().flow.current;

        // Assert
        expect(actual.id).toBe("r3");
    });
});


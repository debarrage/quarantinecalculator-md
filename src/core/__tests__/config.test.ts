import { designations, questions } from "../config";

describe("Config tests",  () => {
    it("Question config should only contain unique ids", () => {
        // Arrange
        const ids = questions.map(q => q.id);
        
        // Act
        const actual = checkDuplicates(ids);

        // Assert
        expect(actual.length).toBe(0);
    });

    it("Designations config should only contain unique ids", () => {
        // Arrange
        const ids = designations.map(q => q.id);
        
        // Act
        const actual = checkDuplicates(ids);

        // Assert
        expect(actual.length).toBe(0);
    });
});

function checkDuplicates(ids: string[]): string[] {
    const duplicates: string[] = [];

    ids.forEach(id => {
        if(ids.indexOf(id) !== ids.lastIndexOf(id)) {
            if(duplicates.indexOf(id) < 0) {
                duplicates.push(id);
            }
        }
    });

    if(duplicates.length > 0) {
        console.log(`Duplicate question ids: ${duplicates.join(", ")}`)
    }

    return duplicates;
}

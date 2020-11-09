import { Designations, QuestionId, Questions } from "../domain";
import { DesignationBuilder, QuestionBuilder } from "./builder";
export * from "./builder";
export * from "./helpers";

export const INITIAL_QUESTION_ID: QuestionId = "0";
export const INVALID_QUESTION_ID: QuestionId = "invalid-id";

// Shortcuts for the builders, for brevity
const q = (id: QuestionId): QuestionBuilder => new QuestionBuilder(id);
const d = (id: QuestionId): DesignationBuilder => new DesignationBuilder(id);

export const questions: Questions= [
    // Introduction and main question
    q(INITIAL_QUESTION_ID).title("Klik op 'Volgende' om de Covid Calculator te starten").next("1"),
    q("1").title("Is de patient symptomatisch? Voldoet hij aan de gevalsdefinitie?").yesNo("s1","r1"),
    
    // Questions r-tree
    q("r1").title("Is er een hoog risico contact geweest met een bevestigd covid geval? Of komt de patient uit een rode zone?").yesNo("r2y", "r11n"),
    q("r10").title("Wanneer is het laatste risicocontact geweest?").daysAgo("rf3"),
    q("r11n").title("Is er een andere indicatie om toch te testen?").yesNo("r5y", "rf1"),
    q("r2n").title("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").yesNo("rf1", "r11n"),
    q("r2y").title("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").yesNo("rf1", "r3"),
    q("r3").title("Is het een huisgenoot?").yesNo("r4", "r10"),
    q("r4").title("Sinds wanneer is de huisgenoot symptomatisch?").daysAgo("r8"),
    q("r5y").title("Is de uitkomst reeds gekend?").yesNo("r6y", "rf3"),
    q("r6y").title("Was de test positief?").yesNo("r7y", "rf1"),
    q("r7y").title("Wanneer is de test gedaan?").daysAgo("rf2"),
    q("r8").title("Is het mogelijk binnenshuis quarantaine te creëeren?").yesNo("r9n", "rf3"),
    q("r9n").title("Vanaf welke datum?").daysAgo("rf3"),
    q("rf3").title("Aantal dagen quarantaine:").final(),
    
    // Final answers r-tree
    q("rf1").title("Geen quarantaine nodig").final(),
    q("rf2").title("Aantal dagen quarantaine:").final(),
    
    // Questions s-tree 
    q("s1").title("Vertoont de patiënt ernstige symptomen?").yesNo("sf1", "s11"),
    q("s11").title("Heeft men hoog risico contact gehad?").yesNo("s2n","s2n"),
    q("s10").title("Zorgpersoneel?").yesNo("s12","s12"),
    q("s2n").title("Is de patiënt ouder dan 6 jaar?").yesNo("s3y","s3n"),
    q("s3n").title("Is er een indicatie om te testen om bijvoorbeeld een ernstig ziek familie lid te beschermen?").yesNo("sf2","sf3"),
    q("s3y").title("Wanneer zijn de klachten begonnen?").daysAgo("s4"),
    q("s4").title("Is er een test gedaan?").yesNo("s5y", "s5n"),
    q("s5n").title("Is er een reden om niet te testen?").yesNo("s10","sf9"),
    q("s5y").title("Is de uitkomst reeds gekend?").yesNo("s6y", "s6n"),
    q("s6n").title("Zijn de klachten sterk suggestief voor een Covid infectie?").yesNo("sf11","sf10"),
    q("s6y").title("Was de test positief?").yesNo("s7y", "s7n"),
    q("s7n").title("Is er een vermoeden van vals negatieve test?").yesNo("s7y","s8n"),
    q("s7y").title("Zijn er op dit moment nog klachten aanwezig?").yesNo("s12","s10"),
    q("s12").relay("r3", "sf6", "s11"),
    q("s8n").title("Heeft men een ook een hoog risico contact gehad?").yesNo("r3", "s9n"),
    q("s9n").title("Is de patient bekwaam om te werken?").yesNo("sf5", "sf4"),
    
    // Final answers s-tree
    q("sf1").title("Verwijs de patiënt naar het ziekenhuis").final(),
    q("sf2").title("Zie procedure voor kinderen.").final(),
    q("sf3").title("Schijf het kind ziek voor de vermoedelijke ziekteperiode").final(),
    q("sf4").title("Schrijf patiënt ziek zo lan g deze werkonbekwaam is").final(),
    q("sf5").title("Quarantaine beëindigd").final(),
    q("sf6").title("Aantal dagen quarantaine:").final(),
    q("sf9").title("Vraag een PCR test aan. Patiënt in quarantaine tot resultaat gekend is").final(),
    q("sf10").title("Quarantaine tot resultaat gekend is. Huisgenoten ook in quarantaine").final(),
    q("sf11").title("Quarantaine tot het resultaat gekend is").final()
];

export const designations: Designations = [
    d("r8").text("Nadien is er een verhoogde waakzaamheid voor 4 extra dagen."),
    d("sf2").text("Meer informatie op sciensano.be"),
    d("s7y").text("Symptomen moeten verdwenen zijn voor beëindiging van quarantaine."),
    d("s10").text("Nadien moet er nog 7 dagen ten alle tijden chirurgisch mondmasker gedragen worden en alle symptomen moeten verdwenen zijn 14 dagen na begin symptomen."),
];

import { builder } from "./builder";
import { IQuestion, QuestionId, Questions } from "./domain";

export const INITIAL_QUESTION_ID: QuestionId = "0";

export const questions: Questions= [
    // Introduction and main question
    builder(INITIAL_QUESTION_ID).withTitle("Start de Covid Quarantaine Calculator.").withNext("r1"),
    builder("1").withTitle("Is de patient symptomatisch? en voldoet hij aan de gevalsdefinitie?").withYesNo("s1","r1"),
    
    // Questions r-tree
    builder("r1").withTitle("Is er een hoog risico conrtact geweest met een bevestigd covid geval? Of komt de patient uit een rode zone?").withYesNo("r2y", "r11n"),
    builder("r10").withTitle("Wanneer is het laatste risicocontact geweest?").withDaysAgo("rf3"),
    builder("r11n").withTitle("Is er een andere indicatie om toch te testen?").withYesNo("r5y", "rf1"),
    builder("r2n").withTitle("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").withYesNo("rf1", "r11n"),
    builder("r2y").withTitle("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").withYesNo("rf1", "r3"),
    builder("r3").withTitle("Is het een huisgenoot?").withYesNo("r4", "r10"),
    builder("r4").withTitle("Sinds wanneer is de huisgenoot symptomatisch?").withDaysAgo("r8"),
    builder("r5y").withTitle("Is de uitkomst reeds gekend?").withYesNo("r6y", "rf3"),
    builder("r6y").withTitle("Was de test positief?").withYesNo("r7y", "rf1"),
    builder("r7y").withTitle("Wanneer is de test gedaan?").withDaysAgo("rf2"),
    builder("r8").withTitle("Is het mogelijk binnenshuis quarantaine te creëeren?").withYesNo("r9n", "rf3"),
    builder("r9n").withTitle("Vanaf welke datum?").withDaysAgo("rf3"),
    builder("rf3").withTitle("Quarantaine tot het resultaat gekend is.").final(),
    
    // Final answers r-tree
    builder("rf1").withTitle("Geen quarantaine nodig").final(),
    builder("rf2").withTitle("Aantal dagen quarantaine").final(),
    builder("rf3").withTitle("Aantal dagen quarantaine. Nadien is er een verhoogde waakzaamheid voor 4 extra dagen.").final(),
    
    // Questions s-tree
    builder("s1").withTitle("Vertoont de patiënt milde of matige symptomen?").withYesNo("s2n","sf1"),
    builder("s10").withTitle("Zorgpersoneel?").withYesNo("sf8","sf7"),
    builder("s2n").withTitle("Is de patiënt ouder dan 6 jaar?").withYesNo("s3y","s3n"),
    builder("s3n").withTitle("Is er een indicatie om te testen om bijvoorbeeld een ernstig ziek familie lid te beschermen?").withYesNo("sf2","sf3"),
    builder("s3y").withTitle("Wanneer zijn de klachten begonnen?").withDaysAgo("s4"),
    builder("s4").withTitle("Is er een test gedaan?").withYesNo("s5y", "s5n"),
    builder("s5n").withTitle("Is er een reden om niet te testen?").withYesNo("s10","sf9"),
    builder("s5y").withTitle("Is de uitkomst reeds gekend?").withYesNo("s6y", "s6n"),
    builder("s6n").withTitle("Zijn de klachten sterk suggestief voor een Covid infectie?").withYesNo("sf11","sf10"),
    builder("s6y").withTitle("Was de test positief?").withYesNo("s7y", "s7n"),
    builder("s7n").withTitle("Is er een vermoeden van vals negatieve test?").withYesNo("s7y","s8n"),
    builder("s7y").withTitle("Zijn er op dit moment nog klachten aanwezig?").withYesNo("sf6","s10"),
    builder("s8n").withTitle("Heeft men een ook een hoog risico contact gehad?").withYesNo("r3", "s9n"),
    builder("s9n").withTitle("Is de patient bekwaam om te werken?").withYesNo("sf5", "sf4"),
    
    // Final answers s-tree
    builder("sf1").withTitle("Verwijs de patiënt naar het ziekenhuis").final(),
    builder("sf2").withTitle("Zie procedure voor kinderen op sciensano.be").final(),
    builder("sf3").withTitle("Schijf het kind ziek voor de vermoedelijke ziekteperiode").final(),
    builder("sf4").withTitle("Schrijf patiënt ziek zo lan g deze werkonbekwaam is").final(),
    builder("sf5").withTitle("Quarantaine beëindigd").final(),
    builder("sf6").withTitle("Berekening aantal dagen quarantaine. Symptomen moeten verdwenen zijn voor beëindiging van quarantaine.").final(),
    builder("sf7").withTitle("Aantal dagen quarantaine").final(),
    builder("sf8").withTitle("Berekening quarantaine. Nadien moet er nog 7 dagen ch. mondmasker gedragen worden. En alle symptomen moeten verdwenen zijn 14 dagen na begin klachten.").final(),
    builder("sf9").withTitle("Vraag een PCR test aan. Patiënt in quarantaine tot resultaat gekend is").final(),
    builder("sf10").withTitle("Quarantaine tot resultaat gekend is. Huisgenoten ook in quarantaine").final(),
    builder("sf11").withTitle("Quarantaine tot het resultaat gekend is").final()
];

export function isQuestionId(id: string): id is QuestionId {
    return !!questions.map(q => q.id).find(i => i === id);
}

export function findQuestion(id: string): IQuestion | undefined {
    return questions.find(q => q.id === id);
}

export const findInitialQuestion = (): IQuestion | undefined  => {
    return findQuestion(INITIAL_QUESTION_ID);
};

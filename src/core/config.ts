import { builder } from "./builder";
import { IQuestion, QuestionId, Questions } from "./domain";

export const INITIAL_QUESTION_ID: QuestionId = "0";

export const questions: Questions= [
    // Introduction and main question
    builder(INITIAL_QUESTION_ID).withTitle("Start de Covid Calculator.").withNext("1"),
    builder("1").withTitle("Is er een hoog risico conrtact geweest met een bevestigd covid geval?").withYesNo("r1", "s1"),

    // R-side of the flow chart
    builder("r1").withTitle("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").withYesNo("f1", "r2"),
    builder("f1").withTitle("Geen quarantaine nodig").final(),
    builder("r2").withTitle("Is het een huisgenoot?").withYesNo("r2a", "r2b"),
    builder("r2a").withTitle("Sinds wanneer is de huisgenoot symptomatisch?").withDaysAgo("r3"),
    builder("r2b").withTitle("Wanneer is het laatste risicocontact geweest?").withDaysAgo("f2"),
    builder("r3").withTitle("Is het mogelijk binnenshuis quarantaine te creëeren?").withYesNo("r4", "f2"),
    builder("r4").withTitle("Vanaf welke datum?").withDaysAgo("f2"),
    builder("f2").withTitle("Aantal dagen quarantaine").final(),

    // S-side of the flow chart
    builder("s1").withTitle("Wanneer zijn de klachten begonnen?").withDaysAgo("s2"),
    builder("s2").withTitle("Is er een test gedaan?").withYesNo("s3a", "s3b"),
    builder("s3a").withTitle("Wanneer").withDaysAgo("s4"),
    builder("s3b").withTitle("Test indien van toepassing").withNext("f5"),
    builder("s4").withTitle("Is de uitkomst reeds gekend?").withYesNo("s5", "f5"),
    builder("s5").withTitle("Was de test positief?").withYesNo("f3", "s6"),
    builder("f3").withTitle("Aantal dagen quarantaine").final(),
    builder("s6").withTitle("Heeft men een ook een hoog risico contact gehad?").withYesNo("r2", "f4"),
    builder("f4").withTitle("Quarantaine beëindigd").final(),
    builder("f5").withTitle("Quarantaine tot het resultaat gekend is").final()
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

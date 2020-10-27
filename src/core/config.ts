import { builder } from "./builder";
import { Question, QuestionId } from "./domain";

export const INITIAL_QUESTION_ID: QuestionId = "0";

export const questions: Array<Question> = [
    builder(INITIAL_QUESTION_ID).withTitle("Start de Covid Calculator.").withNext("1"),
    builder("1").withTitle("Is er een hoog risico conrtact geweest met een bevestigd covid geval?").withYesNo("r1", "s1"),

    // R-side of the flow chart
    builder("r1").withTitle("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").withYesNo("f1", "r2"),
    builder("f1").withTitle("Geen quarantaine nodig").final(),
    builder("r2").withTitle("Is het een huisgenoot?").withYesNo("r2a", "r2b"),
];

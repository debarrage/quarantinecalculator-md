import { db, qb } from "../builder";
import { Designations, QuestionId, Questions } from "../domain";
export * from "../builder";
export * from "./utils";

export const INITIAL_QUESTION_ID: QuestionId = "0";

export const questions: Questions= [
    // Introduction and main question
    qb(INITIAL_QUESTION_ID).withTitle("Start de Covid Quarantaine Calculator.").withNext("1"),
    qb("1").withTitle("Is de patient symptomatisch? Voldoet hij aan de gevalsdefinitie?").withYesNo("s1","r1"),
    
    // Questions r-tree
    qb("r1").withTitle("Is er een hoog risico contact geweest met een bevestigd covid geval? Of komt de patient uit een rode zone?").withYesNo("r2y", "r11n"),
    qb("r10").withTitle("Wanneer is het laatste risicocontact geweest?").withDaysAgo("rf3"),
    qb("r11n").withTitle("Is er een andere indicatie om toch te testen?").withYesNo("r5y", "rf1"),
    qb("r2n").withTitle("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").withYesNo("rf1", "r11n"),
    qb("r2y").withTitle("Heeft de patient in de afgelopen 2 maanden een positieve test (PCR) gehad?").withYesNo("rf1", "r3"),
    qb("r3").withTitle("Is het een huisgenoot?").withYesNo("r4", "r10"),
    qb("r4").withTitle("Sinds wanneer is de huisgenoot symptomatisch?").withDaysAgo("r8"),
    qb("r5y").withTitle("Is de uitkomst reeds gekend?").withYesNo("r6y", "rf3"),
    qb("r6y").withTitle("Was de test positief?").withYesNo("r7y", "rf1"),
    qb("r7y").withTitle("Wanneer is de test gedaan?").withDaysAgo("rf2"),
    qb("r8").withTitle("Is het mogelijk binnenshuis quarantaine te creëeren?").withYesNo("r9n", "rf3"),
    qb("r9n").withTitle("Vanaf welke datum?").withDaysAgo("rf3"),
    qb("rf3").withTitle("Quarantaine tot het resultaat gekend is.").final(),
    
    // Final answers r-tree
    qb("rf1").withTitle("Geen quarantaine nodig").final(),
    qb("rf2").withTitle("Aantal dagen quarantaine").final(),
    
    // Questions s-tree 
    qb("s1").withTitle("Vertoont de patiënt ernstige symptomen?").withYesNo("sf1", "s11"),
    qb("s11").withTitle("Heeft men hoog risico contact gehad?").withYesNo("s2n","s2n"),
    qb("s10").withTitle("Zorgpersoneel?").withYesNo("s12","s12"),
    qb("s2n").withTitle("Is de patiënt ouder dan 6 jaar?").withYesNo("s3y","s3n"),
    qb("s3n").withTitle("Is er een indicatie om te testen om bijvoorbeeld een ernstig ziek familie lid te beschermen?").withYesNo("sf2","sf3"),
    qb("s3y").withTitle("Wanneer zijn de klachten begonnen?").withDaysAgo("s4"),
    qb("s4").withTitle("Is er een test gedaan?").withYesNo("s5y", "s5n"),
    qb("s5n").withTitle("Is er een reden om niet te testen?").withYesNo("s10","sf9"),
    qb("s5y").withTitle("Is de uitkomst reeds gekend?").withYesNo("s6y", "s6n"),
    qb("s6n").withTitle("Zijn de klachten sterk suggestief voor een Covid infectie?").withYesNo("sf11","sf10"),
    qb("s6y").withTitle("Was de test positief?").withYesNo("s7y", "s7n"),
    qb("s7n").withTitle("Is er een vermoeden van vals negatieve test?").withYesNo("s7y","s8n"),
    qb("s7y").withTitle("Zijn er op dit moment nog klachten aanwezig?").withYesNo("s12","s10"),
    qb("s12").withYesNoRelay("r3", "sf6", "s11"),
    qb("s8n").withTitle("Heeft men een ook een hoog risico contact gehad?").withYesNo("r3", "s9n"),
    qb("s9n").withTitle("Is de patient bekwaam om te werken?").withYesNo("sf5", "sf4"),
    
    // Final answers s-tree
    qb("sf1").withTitle("Verwijs de patiënt naar het ziekenhuis").final(),
    qb("sf2").withTitle("Zie procedure voor kinderen.").final(),
    qb("sf3").withTitle("Schijf het kind ziek voor de vermoedelijke ziekteperiode").final(),
    qb("sf4").withTitle("Schrijf patiënt ziek zo lan g deze werkonbekwaam is").final(),
    qb("sf5").withTitle("Quarantaine beëindigd").final(),
    qb("sf6").withTitle("Aantal dagen quarantaine:").final(),
    qb("sf9").withTitle("Vraag een PCR test aan. Patiënt in quarantaine tot resultaat gekend is").final(),
    qb("sf10").withTitle("Quarantaine tot resultaat gekend is. Huisgenoten ook in quarantaine").final(),
    qb("sf11").withTitle("Quarantaine tot het resultaat gekend is").final()
];

export const designations: Designations = [
    db("r8").withDesignation("Nadien is er een verhoogde waakzaamheid voor 4 extra dagen."),
    db("sf2").withDesignation("Meer informatie op sciensano.be"),
    db("sy7").withDesignation("Symptomen moeten verdwenen zijn voor beëindiging van quarantaine."),
    db("s10").withDesignation("Nadien moet er nog 7 dagen ten alle tijden chirurgisch mondmasker gedragen worden en alle symptomen moeten verdwenen zijn 14 dagen na begin symptomen."),
];

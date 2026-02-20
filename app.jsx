import { useState, useEffect, useCallback } from "react";

const SPEECH_DATA = {
    phases: [
        {
            id: "intro", title: "Introduction", shortTitle: "Intro",
            paragraphs: [
                {
                    anchor: "RESILIENCE IS BUILT",
                    blunt: "Global Issue: trauma inspires resilience. Noah and Hamilton prove resilience is actively constructed from pain, not innate. Noah uses narration and figurative language; Miranda uses motivic development and kinetic imagery.",
                    polished: [
                        "Within the field of inquiry Culture, Identity, and Community, I will examine the Global Issue of how traumatic experiences inspire resilience in people's lives.",
                        "Often, trauma is viewed as a force that traps people in a static state of victimhood.",
                        "However, both Trevor Noah's memoir Born a Crime and Lin-Manuel Miranda's musical Hamilton challenge this assertion.",
                        "Noah, navigating the lethal absurdity of Apartheid South Africa, and Alexander Hamilton, escaping a destitute Caribbean upbringing, demonstrate that resilience is not passive — it is an active, creative construction.",
                        "In Born a Crime, Noah employs retrospective narration and figurative language — metaphors, similes — to frame resilience as a learned skill.",
                        "Similarly, in Hamilton, Miranda utilizes motivic development and kinetic imagery to show how the protagonist writes his way out of poverty.",
                        "Ultimately, both works argue that agency is not something one is born with; rather, it is the deliberate act of channeling traumatic experiences into a constructed mechanism for resilience."
                    ]
                }
            ]
        },
        {
            id: "extract-a", title: "Extract A Analysis", shortTitle: "Ext. A",
            paragraphs: [
                {
                    anchor: "MINIBUS",
                    blunt: "Chapter 1 — mom pushes him from a moving minibus. This is my entry point: his agency is not innate, it's a mechanism constructed to counter his environment's trauma.",
                    polished: [
                        "Turning to the literary extract Born a Crime, in Chapter 1, Noah recounts the moment his mother pushed him from a moving minibus to escape a murderous driver.",
                        "Noah uses this terrifying incident to anchor the Global Issue, arguing that his agency is not innate but a mechanism constructed to counter the trauma of his environment."
                    ]
                },
                {
                    anchor: "BAM",
                    blunt: "Onomatopoeia 'Bam!' plus polysyndeton 'tumbled and tumbled.' Sonic impact and dragging syntax mimic total loss of control. Environment overwhelms him — passive survival is impossible, so resilience must be constructed.",
                    polished: [
                        "He opens with the violent onomatopoeia \"Bam!\", compounding it with the polysyndeton \"tumbled and tumbled and rolled and rolled.\"",
                        "This layering of sonic impact and dragging syntax mimics a total loss of control — the environment physically overwhelms his body.",
                        "For Noah, passive survival is impossible; resilience must be actively constructed."
                    ]
                },
                {
                    anchor: "GAZELLE",
                    blunt: "Simile: 'Like the gazelle runs from the lion.' A gazelle is defined by its predator — ready to escape, not freeze. Shifts lens from victimization to adaptation. His resilience was constructed by the 'lurking violence' around him.",
                    polished: [
                        "Consequently, Noah reframes terror as a conditioned response using the simile, \"Like the gazelle runs from the lion, I ran.\"",
                        "The choice is precise: a gazelle is defined by its predator; it is ready to escape if need be rather than freezing.",
                        "This shifts the lens from victimization to high-functioning adaptation.",
                        "Through this imagery, Noah shows that his resilience was constructed entirely by the \"lurking violence\" of his environment."
                    ]
                },
                {
                    anchor: "IDIOT",
                    blunt: "Retrospective narration: 'Had I lived a different life, I'd have stood there like an idiot.' Juxtaposes his real self against a hypothetical normal child. The trauma didn't break him, it trained him.",
                    polished: [
                        "Finally, the \"construction\" itself is exposed through retrospective narration.",
                        "Noah interrupts the scene to offer a hypothetical contrast: \"Had I lived a different life... I'd have stood there like an idiot.\"",
                        "By juxtaposing his \"experiencing self\" against a theoretical \"normal\" child, he isolates the specific mechanism of his agency.",
                        "The trauma did not break him; it trained him.",
                        "The \"different life\" would have produced a victim, but his traumatic history produced a resilient survivor."
                    ]
                },
                {
                    anchor: "SEQUENCE",
                    blunt: "Wrap-up of the three techniques in order: syntax established chaos, simile rationalized the response, narration validated the lesson. Trauma was not an identity-destroyer but the foundation of his resilience.",
                    polished: [
                        "Ultimately, this sequence — syntax establishing chaos, simile rationalizing the response, and narration validating the lesson — substantiates the Global Issue.",
                        "It proves that for Noah, trauma was not an identity-destroyer but the very foundation where he established his resilience."
                    ]
                }
            ]
        },
        {
            id: "extract-a-ww", title: "Extract A — Whole Work", shortTitle: "A · WW",
            paragraphs: [
                {
                    anchor: "ARC",
                    blunt: "Whole work transition. The construction of resilience is the central structural arc of the memoir. Noah uses specific tools throughout — perspective and cultural adaptability — to dismantle trauma.",
                    polished: [
                        "Expanding our view to the whole work, the construction of resilience serves as the central structural arc of the memoir.",
                        "Throughout the text, Noah actively employs specific tools — perspective, cultural adaptability — to dismantle the trauma of his environment."
                    ]
                },
                {
                    anchor: "PAINTING",
                    blunt: "Mulberry Tree, Chapter 9. Berry juice looks like blood, mom laughs, calls him a 'painting' — a simile. She reframes trauma into art. The key word: she teaches him to override trauma with perspective.",
                    polished: [
                        "First, consider the \"Mulberry Tree\" incident in Chapter 9.",
                        "Trevor is bullied by other children and returns home weeping, covered in berry juice that looks exactly like blood.",
                        "A traditional mother might cry, but Patricia laughs.",
                        "She uses a simile, telling him he \"looks like a painting\" rather than a wounded child.",
                        "By reframing a traumatic visual into art, she teaches him to override trauma with perspective — constructing the foundation of his resilience."
                    ]
                },
                {
                    anchor: "CHAMELEON",
                    blunt: "Chapter 4, 'The Chameleon.' Zulu muggers surround him. He code-switches — metaphor: 'I became a chameleon.' Situational irony: they back off. His mixed identity — source of trauma — becomes the tool that keeps him safe.",
                    polished: [
                        "We see this mechanism applied in Chapter 4, \"The Chameleon.\"",
                        "Noah is surrounded by Zulu muggers preparing to attack him.",
                        "Instead of cowering, he code-switches, greeting them fluently in their own tongue.",
                        "He employs the metaphor \"I became a chameleon\" to describe this adaptation — and the scene proves it through situational irony: the muggers, shocked that a mixed-race child speaks Zulu, back off.",
                        "In a moment where he should be a victim, he exerts control, using his mixed cultural identity — a source of trauma — as the very tool that keeps him safe."
                    ]
                },
                {
                    anchor: "BEST-LOOKING",
                    blunt: "Chapter 18 — zenith of the GI. Mom is shot in the head. Wakes up, jokes he's the 'best-looking' in the family. Dark humor defies tragedy. Mechanism is absolute — even facing death, she refuses the identity of victim.",
                    polished: [
                        "Finally, the Global Issue reaches its zenith in Chapter 18.",
                        "After his mother is shot in the head by her abusive husband, the tone of the book shifts to horror.",
                        "Yet, when she wakes up in the hospital, her first act is to joke that Noah is now the \"best-looking\" person in the family.",
                        "Using dark humor to defy the tragedy, she proves the mechanism is absolute.",
                        "Even facing death, she refuses the identity of the victim, cementing the argument that resilience is a deliberate, unyielding choice to rewrite one's own narrative."
                    ]
                }
            ]
        },
        {
            id: "extract-b", title: "Extract B Analysis", shortTitle: "Ext. B",
            paragraphs: [
                {
                    anchor: "OPENING NUMBER",
                    blunt: "Shifting to Hamilton. The opening number 'Alexander Hamilton' lays out his catastrophic childhood. Miranda's arc uses three techniques: word painting, rhyme, accumulation — trauma directly produces resilience.",
                    polished: [
                        "Shifting to the non-literary text, Lin-Manuel Miranda's Hamilton explores the Global Issue through musical theatre.",
                        "The extract comes from the opening number, \"Alexander Hamilton,\" which lays out the protagonist's catastrophic childhood.",
                        "Miranda uses the number's arc — word painting, rhyme, accumulation — to argue that Hamilton's trauma directly produces his resilience."
                    ]
                },
                {
                    anchor: "DRIPPING",
                    blunt: "Word painting plus orchestral reduction. 'Future drip, dripping down the drain' — lone piano isolates him in loss. Then 'Plannin' for the future' flips the same word from trauma to resilience. A drained future is repurposed into a planned one.",
                    polished: [
                        "Miranda first uses word painting and orchestral reduction to pin Hamilton's trauma to a specific word.",
                        "When Burr says, \"Our man saw his future drip, dripping down the drain,\" the onomatopoeia makes the trauma specific — it is \"future\" that's draining.",
                        "The lone piano isolates Hamilton in that loss.",
                        "But when the company later counters with \"Plannin' for the future,\" the same word recurs as a motif, its meaning shifted from trauma to resilience.",
                        "Through this repetition, Miranda argues that a drained future is repurposed into a planned one — trauma becomes the raw material for resilience."
                    ]
                },
                {
                    anchor: "DESTITUTE / RESTITUTION",
                    blunt: "Internal rhyme within a single line. 'Destitute' rhymes with 'restitution' — trauma word becomes resilience word in one breath. Suffering contains the seed of its own recovery. Deprivation drives restitution.",
                    polished: [
                        "Miranda then uses internal rhyme to represent trauma transforming into resilience within a single line.",
                        "On lines 29–30, Burr narrates, \"He woulda been dead or destitute / Without a cent of restitution.\"",
                        "Through the rhyme, Miranda turns a word of trauma — \"destitute\" — into a word of resilience — \"restitution\" — within the same breath.",
                        "Suffering itself contains the seed of its own recovery.",
                        "Hamilton's trauma is not the opposite of his resilience but its origin — deprivation drives restitution."
                    ]
                },
                {
                    anchor: "TRADIN'",
                    blunt: "Accumulation across multiple wounds. 'Tradin' sugar cane, scammin' for every book' — each loss gets a specific counter-action. Wound by wound, not one leap. The incomplete gerunds (-ing) show resilience is ongoing, not a destination.",
                    polished: [
                        "Finally, Miranda uses accumulation to extend this transformation across multiple wounds.",
                        "\"Tradin' sugar cane… Scammin' for every book\" converts further deprivations into resilient responses: poverty becomes trading, lack of education becomes scamming for books.",
                        "Miranda argues individuals transform trauma into resilience not in one leap but wound by wound, each loss answered with its specific counter-action.",
                        "Even the grammar reinforces this: the incomplete gerunds — tradin', plannin', scammin' — suggest resilience is not a destination but an ongoing conversion of trauma into action."
                    ]
                },
                {
                    anchor: "ANSWERED",
                    blunt: "Wrap-up of three techniques: word painting, rhyme, accumulation. Hamilton's resilience doesn't transcend his trauma — it is his trauma, answered.",
                    polished: [
                        "Through word painting, rhyme, and accumulation, Miranda argues that Hamilton's resilience doesn't transcend his trauma — it is his trauma, answered."
                    ]
                }
            ]
        },
        {
            id: "extract-b-ww", title: "Extract B — Whole Work", shortTitle: "B · WW",
            paragraphs: [
                {
                    anchor: "CARRIES FORWARD",
                    blunt: "Whole work transition. The childhood resilience isn't a one-time event — it's a mechanism he carries forward and re-deploys when new trauma arrives.",
                    polished: [
                        "Expanding to the whole work, Miranda shows that the resilience Hamilton built from childhood trauma is not a one-time event — it is a mechanism he carries forward and re-deploys when new trauma arrives."
                    ]
                },
                {
                    anchor: "HUNGRY",
                    blunt: "'My Shot,' Act I. Syllabic density — his lines carry more words per measure than anyone. Linguistic abundance vs. material scarcity. 'Hungry' is a double meaning: deprived and driven. Limitations fuel output.",
                    polished: [
                        "In Act I's \"My Shot,\" Miranda uses syllabic density to show what this resilience looks like in practice.",
                        "Hamilton's vocal lines are packed with rapid-fire sixteenth notes, carrying far more words per measure than anyone else on stage.",
                        "Miranda juxtaposes Hamilton's linguistic abundance against his material scarcity, showing him actively subverting his poverty through language.",
                        "Hamilton names this directly: \"I'm young, scrappy, and hungry.\"",
                        "\"Hungry\" carries a double meaning — both deprived and driven, containing trauma and resilience in a single word.",
                        "Miranda argues that Hamilton's limitations don't limit his output — they fuel it, his density of delivery embodying the Global Issue: deprivation transformed into relentless energy."
                    ]
                },
                {
                    anchor: "HURRICANE",
                    blunt: "'Hurricane,' Act II. New trauma — political ruin. Tableau vivant: ensemble freezes, Hamilton in spotlight. Recapitulation: 'My Shot' melody returns as a ballad — same tool, new crisis. 'I wrote my own deliverance.' The mechanism is permanent.",
                    polished: [
                        "This mechanism is tested in Act II's \"Hurricane.\"",
                        "Facing political ruin — a new trauma — Hamilton retreats into his mind.",
                        "Miranda stages this with a tableau vivant: the ensemble freezes while Hamilton stands isolated in a spotlight, the eye of the storm.",
                        "Musically, Miranda uses recapitulation, bringing back the melody of \"My Shot\" but slowing it to a ballad.",
                        "The frozen ensemble represents a world that has stopped offering help; the returning melody represents Hamilton reaching back to the tool his childhood trauma built.",
                        "He confirms this explicitly: \"I wrote my own deliverance\" — the same act of writing that saved him as a child.",
                        "Miranda argues this is permanent: the resilience childhood trauma built becomes an instrument deployed against every new crisis, because the trauma that forged it never stops shaping him."
                    ]
                }
            ]
        }
    ]
};

const allAnchors = SPEECH_DATA.phases.flatMap((phase, pi) =>
    phase.paragraphs.map((p, idx) => ({
        anchor: p.anchor,
        phaseId: phase.id,
        phaseIndex: pi,
        paraIndex: idx,
    }))
);

function redactWord(word) {
    if (word.length === 0) return "";
    let first = word[0];
    let rest = word.slice(1);
    let redacted = rest.replace(/[a-zA-Z]/g, "·");
    return first + redacted;
}

function redactSentence(sentence) {
    return sentence.split(" ").map(redactWord).join(" ");
}

function SideMap({ currentPhaseIndex, currentParaIndex }) {
    let globalCurrent = 0;
    for (let i = 0; i < currentPhaseIndex; i++) {
        globalCurrent += SPEECH_DATA.phases[i].paragraphs.length;
    }
    globalCurrent += currentParaIndex;

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            padding: "20px 16px",
            background: "rgba(255,255,255,0.02)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            minWidth: "200px",
            maxWidth: "220px",
            overflowY: "auto",
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
        }}>
            <div style={{
                fontSize: "9px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "12px",
                paddingLeft: "4px",
            }}>
                Anchor Chain
            </div>
            {SPEECH_DATA.phases.map((phase, pi) => (
                <div key={phase.id} style={{ marginBottom: "8px" }}>
                    <div style={{
                        fontSize: "8px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: pi === currentPhaseIndex ? "rgba(230,180,110,0.7)" : "rgba(255,255,255,0.15)",
                        marginBottom: "4px",
                        paddingLeft: "4px",
                        transition: "color 0.3s ease",
                    }}>
                        {phase.shortTitle}
                    </div>
                    {phase.paragraphs.map((p, idx) => {
                        let globalIdx = 0;
                        for (let i = 0; i < pi; i++) globalIdx += SPEECH_DATA.phases[i].paragraphs.length;
                        globalIdx += idx;
                        const isCurrent = globalIdx === globalCurrent;
                        const isPast = globalIdx < globalCurrent;

                        return (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "5px 4px",
                                    borderRadius: "4px",
                                    background: isCurrent ? "rgba(230,180,110,0.1)" : "transparent",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <div style={{
                                    width: "5px",
                                    height: "5px",
                                    borderRadius: "50%",
                                    flexShrink: 0,
                                    background: isCurrent
                                        ? "#e6b46e"
                                        : isPast
                                            ? "rgba(230,180,110,0.3)"
                                            : "rgba(255,255,255,0.1)",
                                    boxShadow: isCurrent ? "0 0 8px rgba(230,180,110,0.4)" : "none",
                                    transition: "all 0.3s ease",
                                }} />
                                <div style={{
                                    fontSize: "11px",
                                    color: isCurrent
                                        ? "#e6b46e"
                                        : isPast
                                            ? "rgba(255,255,255,0.3)"
                                            : "rgba(255,255,255,0.18)",
                                    fontWeight: isCurrent ? 600 : 400,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    transition: "color 0.3s ease",
                                }}>
                                    {p.anchor}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

function PolishedView({ sentences }) {
    const [revealed, setRevealed] = useState({});

    useEffect(() => {
        setRevealed({});
    }, [sentences]);

    const toggle = (i) => {
        setRevealed((prev) => ({ ...prev, [i]: !prev[i] }));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "4px",
            }}>
                <div style={{
                    fontSize: "9px",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                }}>
                    Click each sentence to reveal
                </div>
                <button
                    onClick={() => {
                        const allRevealed = sentences.every((_, i) => revealed[i]);
                        if (allRevealed) {
                            setRevealed({});
                        } else {
                            const all = {};
                            sentences.forEach((_, i) => { all[i] = true; });
                            setRevealed(all);
                        }
                    }}
                    style={{
                        padding: "4px 12px",
                        borderRadius: "6px",
                        border: "1px solid rgba(196,167,224,0.2)",
                        background: "rgba(196,167,224,0.08)",
                        color: "rgba(196,167,224,0.7)",
                        fontSize: "10px",
                        fontFamily: "'JetBrains Mono', monospace",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        letterSpacing: "0.5px",
                    }}
                >
                    {sentences.every((_, i) => revealed[i]) ? "Hide All" : "Reveal All"}
                </button>
            </div>
            {sentences.map((s, i) => {
                const isRevealed = revealed[i];
                return (
                    <div
                        key={i}
                        onClick={() => toggle(i)}
                        style={{
                            padding: "14px 18px",
                            borderRadius: "8px",
                            background: isRevealed
                                ? "rgba(230,180,110,0.06)"
                                : "rgba(255,255,255,0.03)",
                            border: `1px solid ${isRevealed ? "rgba(230,180,110,0.15)" : "rgba(255,255,255,0.06)"}`,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            fontSize: "15px",
                            lineHeight: "1.7",
                            fontFamily: "'EB Garamond', 'Georgia', serif",
                            color: isRevealed ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.35)",
                            letterSpacing: isRevealed ? "0" : "0.5px",
                            userSelect: isRevealed ? "text" : "none",
                        }}
                    >
                        {isRevealed ? s : redactSentence(s)}
                    </div>
                );
            })}
        </div>
    );
}

export default function IOMemorizer() {
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [paraIndex, setParaIndex] = useState(0);
    const [mode, setMode] = useState(1);

    const phase = SPEECH_DATA.phases[phaseIndex];
    const para = phase.paragraphs[paraIndex];

    const goNext = useCallback(() => {
        if (paraIndex < phase.paragraphs.length - 1) {
            setParaIndex(paraIndex + 1);
        } else if (phaseIndex < SPEECH_DATA.phases.length - 1) {
            setPhaseIndex(phaseIndex + 1);
            setParaIndex(0);
        }
        setMode(1);
    }, [paraIndex, phaseIndex, phase.paragraphs.length]);

    const goPrev = useCallback(() => {
        if (paraIndex > 0) {
            setParaIndex(paraIndex - 1);
        } else if (phaseIndex > 0) {
            const prevPhase = SPEECH_DATA.phases[phaseIndex - 1];
            setPhaseIndex(phaseIndex - 1);
            setParaIndex(prevPhase.paragraphs.length - 1);
        }
        setMode(1);
    }, [paraIndex, phaseIndex]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "1") setMode(1);
            else if (e.key === "2") setMode(2);
            else if (e.key === "3") setMode(3);
            else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                e.preventDefault();
                goNext();
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                e.preventDefault();
                goPrev();
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [goNext, goPrev]);

    const modeLabels = ["Anchor", "Argument", "Polished"];
    const modeColors = ["#e6b46e", "#8bb8e0", "#c4a7e0"];

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            background: "#111113",
            color: "#fff",
            fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
            overflow: "hidden",
        }}>
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <SideMap currentPhaseIndex={phaseIndex} currentParaIndex={paraIndex} />

            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }}>
                {/* Header */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 32px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                    {/* Phase tabs */}
                    <div style={{ display: "flex", gap: "4px" }}>
                        {SPEECH_DATA.phases.map((p, i) => (
                            <button
                                key={p.id}
                                onClick={() => { setPhaseIndex(i); setParaIndex(0); setMode(1); }}
                                style={{
                                    padding: "6px 14px",
                                    borderRadius: "6px",
                                    border: "none",
                                    background: i === phaseIndex ? "rgba(230,180,110,0.12)" : "transparent",
                                    color: i === phaseIndex ? "#e6b46e" : "rgba(255,255,255,0.3)",
                                    fontSize: "11px",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontWeight: i === phaseIndex ? 600 : 400,
                                    cursor: "pointer",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {p.shortTitle}
                            </button>
                        ))}
                    </div>

                    {/* Mode selector */}
                    <div style={{ display: "flex", gap: "4px" }}>
                        {modeLabels.map((label, i) => (
                            <button
                                key={label}
                                onClick={() => setMode(i + 1)}
                                style={{
                                    padding: "6px 14px",
                                    borderRadius: "6px",
                                    border: `1px solid ${mode === i + 1 ? modeColors[i] + "40" : "rgba(255,255,255,0.06)"}`,
                                    background: mode === i + 1 ? modeColors[i] + "15" : "transparent",
                                    color: mode === i + 1 ? modeColors[i] : "rgba(255,255,255,0.3)",
                                    fontSize: "11px",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontWeight: mode === i + 1 ? 600 : 400,
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {i + 1} {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Paragraph nav dots */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "16px",
                }}>
                    {phase.paragraphs.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setParaIndex(i); setMode(1); }}
                            style={{
                                width: i === paraIndex ? "28px" : "8px",
                                height: "8px",
                                borderRadius: "4px",
                                border: "none",
                                background: i === paraIndex ? "#e6b46e" : "rgba(255,255,255,0.1)",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                padding: 0,
                            }}
                        />
                    ))}
                </div>

                {/* Main content area */}
                <div style={{
                    flex: 1,
                    display: "flex",
                    alignItems: mode === 3 ? "flex-start" : "center",
                    justifyContent: "center",
                    padding: mode === 3 ? "20px 48px 48px" : "48px",
                    overflowY: "auto",
                }}>
                    <div style={{
                        maxWidth: "680px",
                        width: "100%",
                    }}>
                        {mode === 1 && (
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "16px",
                                animation: "fadeIn 0.3s ease",
                            }}>
                                <div style={{
                                    fontSize: "9px",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    color: "rgba(230,180,110,0.4)",
                                }}>
                                    Anchor
                                </div>
                                <div style={{
                                    padding: "48px 56px",
                                    borderRadius: "16px",
                                    background: "linear-gradient(135deg, rgba(230,180,110,0.08) 0%, rgba(230,180,110,0.03) 100%)",
                                    border: "1px solid rgba(230,180,110,0.12)",
                                    textAlign: "center",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(230,180,110,0.06)",
                                }}>
                                    <div style={{
                                        fontSize: "36px",
                                        fontWeight: 700,
                                        color: "#e6b46e",
                                        letterSpacing: "2px",
                                        fontFamily: "'JetBrains Mono', monospace",
                                        textShadow: "0 0 40px rgba(230,180,110,0.2)",
                                    }}>
                                        {para.anchor}
                                    </div>
                                </div>
                                <div style={{
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.2)",
                                    marginTop: "8px",
                                }}>
                                    Press <span style={{ color: "rgba(139,184,224,0.6)", fontWeight: 600 }}>2</span> for argument · <span style={{ color: "rgba(196,167,224,0.6)", fontWeight: 600 }}>3</span> for polished
                                </div>
                            </div>
                        )}

                        {mode === 2 && (
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "16px",
                                animation: "fadeIn 0.3s ease",
                            }}>
                                <div style={{
                                    fontSize: "9px",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    color: "rgba(139,184,224,0.4)",
                                }}>
                                    Blunt Argument
                                </div>
                                <div style={{
                                    fontSize: "13px",
                                    color: "rgba(230,180,110,0.5)",
                                    fontWeight: 600,
                                    letterSpacing: "1px",
                                    marginBottom: "4px",
                                }}>
                                    {para.anchor}
                                </div>
                                <div style={{
                                    padding: "40px 48px",
                                    borderRadius: "16px",
                                    background: "linear-gradient(135deg, rgba(139,184,224,0.06) 0%, rgba(139,184,224,0.02) 100%)",
                                    border: "1px solid rgba(139,184,224,0.1)",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                                }}>
                                    <div style={{
                                        fontSize: "20px",
                                        lineHeight: "1.7",
                                        color: "rgba(255,255,255,0.85)",
                                        fontFamily: "'EB Garamond', Georgia, serif",
                                        textAlign: "center",
                                    }}>
                                        {para.blunt}
                                    </div>
                                </div>
                                <div style={{
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.2)",
                                    marginTop: "8px",
                                }}>
                                    Press <span style={{ color: "rgba(230,180,110,0.6)", fontWeight: 600 }}>1</span> for anchor · <span style={{ color: "rgba(196,167,224,0.6)", fontWeight: 600 }}>3</span> for polished
                                </div>
                            </div>
                        )}

                        {mode === 3 && (
                            <div style={{ animation: "fadeIn 0.3s ease" }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    marginBottom: "20px",
                                }}>
                                    <div style={{
                                        fontSize: "9px",
                                        letterSpacing: "3px",
                                        textTransform: "uppercase",
                                        color: "rgba(196,167,224,0.4)",
                                    }}>
                                        Polished
                                    </div>
                                    <div style={{
                                        fontSize: "13px",
                                        color: "rgba(230,180,110,0.5)",
                                        fontWeight: 600,
                                        letterSpacing: "1px",
                                    }}>
                                        {para.anchor}
                                    </div>
                                </div>
                                <PolishedView sentences={para.polished} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer nav */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 32px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                }}>
                    <button
                        onClick={goPrev}
                        disabled={phaseIndex === 0 && paraIndex === 0}
                        style={{
                            padding: "8px 20px",
                            borderRadius: "8px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "transparent",
                            color: (phaseIndex === 0 && paraIndex === 0) ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.4)",
                            fontSize: "12px",
                            fontFamily: "'JetBrains Mono', monospace",
                            cursor: (phaseIndex === 0 && paraIndex === 0) ? "default" : "pointer",
                            transition: "all 0.2s ease",
                        }}
                    >
                        ← Prev
                    </button>

                    <div style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.2)",
                    }}>
                        {phase.title} · {paraIndex + 1} / {phase.paragraphs.length}
                    </div>

                    <button
                        onClick={goNext}
                        disabled={phaseIndex === SPEECH_DATA.phases.length - 1 && paraIndex === phase.paragraphs.length - 1}
                        style={{
                            padding: "8px 20px",
                            borderRadius: "8px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "transparent",
                            color: (phaseIndex === SPEECH_DATA.phases.length - 1 && paraIndex === phase.paragraphs.length - 1) ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.4)",
                            fontSize: "12px",
                            fontFamily: "'JetBrains Mono', monospace",
                            cursor: (phaseIndex === SPEECH_DATA.phases.length - 1 && paraIndex === phase.paragraphs.length - 1) ? "default" : "pointer",
                            transition: "all 0.2s ease",
                        }}
                    >
                        Next →
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
      `}</style>
        </div>
    );
}
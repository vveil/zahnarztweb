import BaseWidget from "~/components/BaseWidget";
import ExpandWidget from "~/components/ExpandWidget";
import HeroText from "~/components/HeroText";
import { A } from "@solidjs/router";

export default function Services(props: any) {
  let splitVersion = `Behandlungs-spektrum`
  return (
    <div>
      <div>
        <HeroText text="Behandlungsspektrum" splitText={splitVersion} className="mtl:mx-0 mx-5 mb-12" />
        <div class="mtl:mx-0 flex flex-col gap-8 md:mx-5 md:flex-row md:flex-wrap">
          <ExpandWidget
            title="Zahnersatz"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="max-w-[900px]">
              Das Gebiet des Zahnersatzes ist mittlerweile sehr umfangreich. Grundsätzlich unterscheidet man zwischen festsitzendem Zahnersatz, den beispielsweise Kronen und Brücken darstellen sowie herausnehmbaren Zahnersatz.
            </div>
          </ExpandWidget>

          <ExpandWidget
            title="Implantate"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="max-w-[900px]">
              Implantate gehören schon seit langem zum festen Bestandteil der modernen Zahnheilkunde. Fehlen ein oder mehrere natürliche Zähne, so kann dieser Defekt ohne Präparation und Substanzverlust der benachbarten Zähne wiederhergestellt werden.
            </div>
          </ExpandWidget>

          <ExpandWidget
            title="Prophylaxe"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="max-w-[900px]">
              Unter Prophylaxe versteht man Maßnahmen, die Erkrankungen wie Karies und Parodontitis vorbeugen. Sie geht selbst über das sehr gründliche Zähneputzen hinaus.
            </div>
          </ExpandWidget>

          <ExpandWidget
            title="Parodontitis"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="max-w-[900px]">
              Die Parodontitis ist eine bakteriell verursachte Erkrankung, die eine Entzündung des Zahnbettes darstellt. Die im allgemeinen Sprachgebrauch als Parodontose bezeichnete Form hingegen, ist eine seltenere, nicht entzündliche Form dieser Erkrankung.
            </div>
          </ExpandWidget>

          <ExpandWidget
            title="Schnarchen"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="max-w-[900px]">
              Für die Meisten ist das Schnarchen ein Ausdruck tiefen Schlafes. Für viele ist es eine Störung der gemeinsamen Nachtruhe. Nicht selten stellt es sogar eine lebensbedrohliche Schlafstörung dar.
            </div>
          </ExpandWidget>

          <ExpandWidget
            title="Bleaching"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="max-w-[900px]">
              Bleaching ist eine kosmetische Behandlung zur Aufhellung verfärbter Zähne. Dabei wird ein spezielles Bleichmittel auf die Zähne aufgetragen, das Verfärbungen reduziert und so zu einem helleren, strahlenderen Lächeln führt.
            </div>
          </ExpandWidget>

          <ExpandWidget
            title="Labor"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="max-w-[900px]">
              Wir bieten Ihnen qualitativ höchstwertigen Zahnersatz. Dies beinhaltet nicht nur die perfekte Arbeit in der Praxis sondern ebenso die perfekte zahntechnische Anfertigung im Labor. Daher arbeiten wir mit dem lange etablierten deutschen Meisterlabor <A href="https://techno-dent.de" class="text-highlight">technoDENT</A> zusammen.
            </div>
          </ExpandWidget>


        </div>
      </div>
    </div>
  );
}

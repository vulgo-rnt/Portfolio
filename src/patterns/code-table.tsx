import { NumberedLines } from "@/components/code-table-components/numbered-lines";
import {
  Variable,
  NameVariable,
  White,
  Strings,
  Type,
  Yellow,
  Param,
  NameVariableSecond,
  AspFunc,
  AspFuncBlue,
  Function,
  Comment,
} from "@/components/code-table-components/styled-texts";

export default function CodeTable() {
  return (
    <NumberedLines>
      <code>
        <div>
          <Variable>const </Variable>
          <NameVariable>name </NameVariable>
          <White>= </White>
          <Strings>Renan</Strings>
          <White>;</White>
        </div>
        <div>
          <Variable>const </Variable>
          <NameVariable>lastname </NameVariable>
          <White>= </White>
          <Strings>Toniolo</Strings>
          <White>;</White>
        </div>
        <div>
          <Variable>const </Variable>
          <NameVariable>gender </NameVariable>
          <White>= </White>
          <Strings>Masc</Strings>
          <White>;</White>
        </div>
        <div>
          <Variable>const </Variable>
          <NameVariable>birthday </NameVariable>
          <White>= </White>
          <Variable>new </Variable>
          <Type>Date</Type>
          <Yellow>{"("}</Yellow>
          <Param>2001</Param>
          <White>,</White>
          <Param> 7</Param>
          <White>,</White>
          <Param> 3</Param>
          <Yellow>{")"}</Yellow>
          <White>;</White>
        </div>
        <div>
          <Variable>let </Variable>
          <NameVariable>age </NameVariable>
          <White>= </White>
          <NameVariableSecond>Math</NameVariableSecond>
          <White>.</White>
          <Function>abs</Function>
          <Yellow>{"("}</Yellow>
          <br />

          <Variable>new </Variable>
          <Type>Date</Type>
          <AspFunc>{"("}</AspFunc>
          <Type>Date</Type>
          <White>.</White>
          <Function>now</Function>
          <AspFuncBlue>{"("}</AspFuncBlue>
          <AspFuncBlue>{") "}</AspFuncBlue>
          <White>- </White>
          <NameVariable>birthday</NameVariable>
          <White>.</White>
          <Function>getTime</Function>
          <AspFuncBlue>{"("}</AspFuncBlue>
          <AspFuncBlue>{")"}</AspFuncBlue>
          <AspFunc>{")"}</AspFunc>
          <White>.</White>
          <Function>getUTFFullYear</Function>
          <AspFunc>{"("}</AspFunc>
          <AspFunc>{")"}</AspFunc>
          <White> - </White>
          <Param>1970</Param>
          <br />

          <Yellow>{")"}</Yellow>
          <White>;</White>
        </div>
        <div>
          <Comment>{"// return 22"}</Comment>
        </div>
        <div>
          <Variable>let </Variable>
          <NameVariable>hobbies </NameVariable>
          <White>= </White>
          <Yellow>{"["}</Yellow>
          <Strings>Jiu-Jitsu</Strings>
          <White>, </White>
          <Strings>Xadrez</Strings>
          <White>, </White>
          <Strings>StardewValley</Strings>
          <Yellow>{"]"}</Yellow>
          <White>;</White>
        </div>
        <div>
          <Variable>const </Variable>
          <NameVariable>email </NameVariable>
          <White>= </White>
          <Strings>rtoniolo4@gmail.com</Strings>
        </div>
      </code>
    </NumberedLines>
  );
}

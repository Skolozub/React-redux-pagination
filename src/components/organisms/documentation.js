import React from "react";
import { Lib } from "../atoms/lib";

export const Documentation = () => (
  <Lib.PageWrapper>
    <Lib.H1>Документация</Lib.H1>
    <Lib.H2>Пропсы</Lib.H2>
    <Lib.Ul>
      <Lib.Li>
        <Lib.Mark>pagName [string: required]</Lib.Mark> - id пагинации, которое
        будет внесено в store.pagination
        <br />
        <br />
        <Lib.Mark>
          {`store: {
  pagination: {
    [pagName]: { data }
  }
}`}
        </Lib.Mark>
      </Lib.Li>
      <Lib.Li>
        <Lib.Mark>withparams [boolean: optional]</Lib.Mark> - определяет, будут
        ли парситься данные из get-параметров строки URL
      </Lib.Li>
      <Lib.Li>
        <Lib.Mark>paramName [string: optional, default = 'page']</Lib.Mark> -
        задаёт имя параметра пагинации, по умолчанию оно равно "page"
      </Lib.Li>
    </Lib.Ul>
  </Lib.PageWrapper>
);

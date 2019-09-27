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
          {`
store: {
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
    <Lib.H2>Примеры</Lib.H2>
    <br />
    <br />
    Пагинация с параметрами
    <br />
    <br />
    <Lib.Mark>
      {`
import React from "react";
import PaginationContainer from "../../containers/pagination-container";
import ListContainer from "./list-container";
import ListPaginationContainer from "./list-pagination-container";

const ListWithParamsPaginationContainer = () => (
  <PaginationContainer pagName="withparams" paramName="stage" withparams>
    <ListPaginationContainer pagName="withparams" paramName="stage" />
    <ListContainer pagName="withparams" />
  </PaginationContainer>
);

export default ListWithParamsPaginationContainer;
      `}
    </Lib.Mark>
    <br />
    <br />
    Пагинация без параметров
    <br />
    <br />
    <Lib.Mark>
      {`
import React from "react";
import PaginationContainer from "../../containers/pagination-container";
import ListContainer from "./list-container";
import ListPaginationContainer from "./list-pagination-container";

const ListWithoutParamsPaginationContainer = ({ params }) => (
  <PaginationContainer pagName="wihtoutparams">
    <ListPaginationContainer pagName="wihtoutparams" />
    <ListContainer pagName="wihtoutparams" />
  </PaginationContainer>
);

export default ListWithoutParamsPaginationContainer;
      `}
    </Lib.Mark>
  </Lib.PageWrapper>
);

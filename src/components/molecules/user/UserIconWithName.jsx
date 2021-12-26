// import { memo, useContext } from "react";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../../store/userState";
// import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  // stateの参照だけをするときは、useRecoilValueを使う
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  console.log("UserIconWithName");

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;

import styled from "@emotion/styled";

export const Profile = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 24px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 320px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 40%;
  margin-bottom: 16px;`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 4px;`;

export const ProfileTag = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;`;

export const ProfileLocation = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  line-height: 1.5;`;

export const StatsList = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #eee;
  border: 1px solid #d8d7d7;
  
  li{display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  padding: 10px;}
  
  li:not(:last-child) {
  border-right: 1px #d8d7d7 solid;
}`;

export const StatsLabel = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;`;

export const StatsQuantity = styled.span`
  color: rgba(0, 0, 0, 0.9);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;`;
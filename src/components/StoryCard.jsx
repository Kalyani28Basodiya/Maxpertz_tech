import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: #7a7ae7;
  padding: 12px;
  border-radius: 12px;
  text-align: center;

  img {
    width: 100%;
       height: 209px;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    color: white;
    font-weight: 500;
  }

  .status {
    background-color: #d6d6e7;
    color: black;
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 12px;
    display: inline-block;
    font-weight: 700;
  }
`;

const StoryCard = ({ data }) => {
  const { _id, Image, Title, Status } = data;

  return (
    <Link to={`/storydetailpage/${_id}`} >
      <Card>
        <img
          src={`https://ik.imagekit.io/dev24/${Image?.[0]}`}
          alt={Title}
        />
        <p>{Title}</p>
        <p className="status">{Status}</p>
      </Card>
    </Link>
  );
};

export default StoryCard;

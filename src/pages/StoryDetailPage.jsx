import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "../components/Tabs";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 32px auto;
  padding: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 20px 0 10px;
`;

const StoryDetailPage = () => {
      const { id } = useParams();
  const [story, setStory] = useState(null);

  const fetchStory = async () => {
    try {
      const res = await axios.get(
        `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
      );
      setStory(res.data);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  useEffect(() => {
    fetchStory();
  }, [id]);

    if (!story) return <Wrapper>Loading...</Wrapper>;

    return (
        <Wrapper>
            <Image src={`https://ik.imagekit.io/dev24/${story?.Image[0]}`} alt={story?.Title} />
            <Title>{story?.Title}</Title>
            <Tabs story={story} />
        </Wrapper>
    );
};

export default StoryDetailPage;

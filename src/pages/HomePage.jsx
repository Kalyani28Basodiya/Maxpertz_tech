import styled from "styled-components";
import StoryCard from "../components/StoryCard";
import { useStories } from "../context/StoriesContext";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  background: rgba(18, 18, 42, 0.7);
  min-height: 100vh;
  padding-bottom: 50px;

  h2 {
    text-align: center;
    font-size: 40px;
    color: white;
    padding: 30px 0;
    font-weight: 700;
  }

  .card {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
    background: rgba(18, 18, 42, 0.7);
    padding: 40px;
    border-radius: 24px;
    backdrop-filter: blur(10px);
  }
`;

const HomePage = () => {
  const { stories } = useStories();
console.log(stories)
  return (
    <Wrapper>
      <h2>Science Fiction Stories</h2>
      <div className="card">
        {stories.map((story) => (
          <StoryCard key={story._id} data={story} />
        ))}
      </div>
    </Wrapper>
  );
};

export default HomePage;

import { useContext, useEffect } from 'react'
import { authContext } from '../context/AuthContext'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.div`
  background: linear-gradient(120deg, #0052D4, #4364F7, #6FB1FC);
  color: white;
  padding: 2rem;
  height: 200px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const Content = styled.div`
  background: #f5f5f5;
  padding: 2rem;
  width: 100%;
`;

const SkillsTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const JobGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const JobCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const JobRole = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const Company = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const ApplyButton = styled.button`
  background: #4364F7;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0052D4;
  }
`;

function Homepage() {
  const { user } = useContext(authContext);

  async function callProtectedRoute() {
    const token = localStorage.getItem("token")
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/test-jwt/checkout`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(response.data)
  }

  useEffect(() => {
    callProtectedRoute()
  }, [])

  const jobs = [
    { id: 1, role: "Job Role", company: "Company" },
    { id: 2, role: "Job Role", company: "Company" },
    { id: 3, role: "Job Role", company: "Company" },
    { id: 4, role: "Job Role", company: "Company" }
  ];

  return (
    <Container>
      <Header>
        <Title>Buenos Dias, {user?.name || 'Guest'}!</Title>
        <Subtitle>One-swipe away from unlocking your future.</Subtitle>
      </Header>
      <Content>
        <SkillsTitle>Ready for new skills, {user?.name || 'Guest'}?</SkillsTitle>
        <JobGrid>
          {jobs.map(job => (
            <JobCard key={job.id}>
              <JobRole>{job.role}</JobRole>
              <Company>{job.company}</Company>
              <ApplyButton>Apply</ApplyButton>
            </JobCard>
          ))}
        </JobGrid>
      </Content>
    </Container>
  )
}

export default Homepage

import styled from 'styled-components'
import db from '../db.json';

import Footer from '../sources/components/Footer';
import GitHubCorner from '../sources/components/GitHubCorner';
import QuizBackground from '../sources/components/QuizBackground';
import QuizLogo from '../sources/components/QuizLogo';
import Widget from '../sources/components/Widget';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 10%;
  padding-top: 45px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  h4 {
    text-align: center;
    font-weight: normal;
  }
`;

export default function Home() {
  return (
   <QuizBackground backgroundImage={ db.bg }>
     <p>Background Image:</p>
     <a href="https://www.pexels.com/photo/green-tree-near-green-plants-142497/">
       <span>Green Tree near Green Plants (Pexels 142497) Mali Maeder</span>
     </a>
     <QuizContainer>
       <QuizLogo />
       <h4>Quiz Containers</h4>
       <Widget>
         <Widget.Header>
           <h1>{db.title}</h1>
         </Widget.Header>
         <Widget.Content>
           <p>{db.description}</p>
         </Widget.Content>
       </Widget>
       <Widget>
         <Widget.Content>
           <h1>Questões Diversas</h1>
           <p>Questões propostas pela comunidade alura.</p>
         </Widget.Content>
       </Widget>
       <Footer />
       <h4>Quiz Footer</h4>
     </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/alura-challenges/aluraquiz-base/tree/v1" />
   </QuizBackground>
  );
}

// export default function Home() {
//   return (
//    <BackgroundImage>
//      Background Image:
//      Green Tree near Green Plants (Pexels 142497) Mali Maeder
//      <QuizContainer>
//        Quiz Container: Alura Next.js Course
//        <Widget>
//         <Widget.Content>
//            <Widget.Header>
//              <h1>The Destiny of Our World</h1>
//            </Widget.Header>
//           <p>Living well with all whole Nature</p>
//          </Widget.Content>
//        </Widget>
//        <Widget>
//          <Widget.Content>
//             <Widget.Header>
//              <h1>Alura Quiz</h1>
//            </Widget.Header>
//            <p>Questions about our current perception of the world we live in </p>
//          </Widget.Content>
//        </Widget>
//      </QuizContainer>
//    </BackgroundImage>
//   );
// }

// const Title = styled.h1`
//   font-size: 50px;
//   font-family: Fantasy; // Arial x Fantasy
//   color: ${({ theme }) => theme.colors.primary}; // primary x secundary
// `

// export default function Home() {
//   return <Title>My Page</Title>
// }
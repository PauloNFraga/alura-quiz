import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Footer from '../sources/components/Footer';
import GitHubCorner from '../sources/components/GitHubCorner';
import Input from '../sources/components/Input';
import QuizBackground from '../sources/components/QuizBackground';
import QuizLogo from '../sources/components/QuizLogo';
import Widget from '../sources/components/Widget';

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
  const router = useRouter();
  const [name, setName] = React.useState('');
  // console.log('useState Return Value', name, setName)

  return (
   <QuizBackground backgroundImage={ db.bg }>
     <Head>
       <title>alura-quiz</title>
       <meta name='title' content='alura Quiz'></meta>
       <meta name='description' content='Imersão React Next.js'></meta>

        // Facebook
       <meta property='og:type' content='website'></meta>
       <meta property='og:url' content='https://alura-quiz.paulonfraga.vercel.app/'></meta>
       <meta property='og:title' content='alura Quiz'></meta>
       <meta property='og:description' content='Imersão React Next.js'></meta>
       <meta property='og:image' content='../sources/MetaTag/alura-quiz-metaTag.jpg'></meta>

        // Twitter
       <meta property='twitter:card' content='summary_large_image'></meta>
       <meta property='twitter:url' content='https://alura-quiz.paulonfraga.vercel.app/'></meta>
       <meta property='twitter:title' content='alura Quiz'></meta>
       <meta property='twitter:description' content='Imersão React Next.js'></meta>
       <meta property='twitter:image' content='../sources/MetaTag/alura-quiz-metaTag.jpg'></meta>
     </Head>

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
           <form onSubmit={function (EventInfo) {
             EventInfo.preventDefault();
             router.push(`/quiz?name=${name}`)
            //  console.log('Sending informations through React');
           }}>
              <Input 
                onChange={function (EventInfo) {
                  setName(EventInfo.target.value);
                  // console.log(EventInfo.target.value);
                }}
                placeholder="Your Name"/>
              <button type="submit" disabled={true.length === 0}>
                Play {name}
              </button>
              <p>{db.description}</p>
           </form>
         </Widget.Content>
       </Widget>

       <Widget>
         <Widget.Header>
            <h1>Questions</h1>
         </Widget.Header>
         <Widget.Content>
           <p>Questões propostas pela comunidade alura.</p>
         </Widget.Content>
       </Widget>
       <Footer />
       <h4>Quiz Footer</h4>
     </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/PauloNFraga/alura-quiz.git" />
   </QuizBackground>
  );
}

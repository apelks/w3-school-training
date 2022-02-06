import MeetUpList from "../components/meetups/MeetupList";
import Head from 'next/head';

import { MongoClient } from "mongodb";
import { Fragment } from "react/cjs/react.production.min";


const HomePage = (props) => {




  return (
  
  <Fragment>

    <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly React meetup"/>
    </Head>
  <MeetUpList meetups={props.meetups} />;

  </Fragment>

  )

};

/*export async function getServerSideProps (context) {

    const req = context.req;
    const res = context.res;



    return{
        props:{
            meetups: DUMMY_MEETUPS
        }
    }
}
*/

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://keshav:Keshav456@cluster0.ywdnz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
          title:meetup.title,
          address:meetup.title,
          image:meetup.image,
          id: meetup._id.toString()

      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

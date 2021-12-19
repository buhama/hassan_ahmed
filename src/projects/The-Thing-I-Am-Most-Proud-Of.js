import { useEffect } from 'react';
import { Button, Link, useColorModeValue } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

import FadeIn from 'react-fade-in/lib/FadeIn';

const The_Thing_I_Am_Most_Proud_Of = () => {
  const buttonColor = useColorModeValue('purple', 'green');

  useEffect(() => {
    document.title = 'The Thing I Am Most Proud Of | Hassan Ahmed';
  }, []);

  return (
    <div className='blog'>
      <FadeIn>
        <Link as={RouterLink} to='/' style={{ textDecoration: 'none' }}>
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme={buttonColor}
            variant='solid'
          >
            Go Back Home
          </Button>
        </Link>
        <div className='blog-title'>
          <h1>The Thing I am Most Proud Of | Campus Vibez uOttawa</h1>
        </div>
        <div className='blog-body'>
          <p>
            What is Campus Vibez uOttawa (also known as CVUO)? It’s reallyyyy
            hard to explain. When it comes down to it, it is a brand new
            administrative/marketing service for all student clubs and
            associations at the University of Ottawa. It originally started off
            as a student club but has grown to be so much more and is hands down
            the highlight of my professional career.{' '}
          </p>
          <br />
          <p>
            Bringing up this organization from the ground up and seeing massive
            growth year after year has been a thrilling experience. I have
            learned everything I know about working on a team, leadership, time
            management, and an ongoing list of skills all from working at CVUO.
            I say with confidence that my team and I, in a very short amount of
            time, have changed the student life at uOttawa.
          </p>
          <br />
          <h2>A brief story</h2>
          <p>
            Initially, CVUO was meant to be a club that was providing marketing
            services to other uOttawa student organizations for a price. After a
            few years of little to no success, we finally started picking up
            pace in 2018-2019 (my second year running the team). After what was
            a crazy 8 months of unprecedented success, we reached out to the
            University of Ottawa Student Union to collaborate on more projects.
            What initially started as small talks about things we could work on
            together soon ended up with CVUO taking over the entire club system
            at uOttawa by the start of the 2019 Fall Semester.{' '}
          </p>
          <br />
          <p>
            For our very first year as a service to clubs, we were given a small
            budget and a team comprised entirely of volunteers and yet were the
            most efficient and effective service at the university. Completely
            changing the relationship between student groups and the student
            union within a year. But of course, things didn’t stop there,
            currently, we are in our second year as a service and have 3 paid
            employees, a budget that has increased by 40x what it was in 2018,
            and have added countless new services that we provide to clubs.{' '}
          </p>
          <br />
          <p>
            As one of the most known services and student groups on campus, the
            entire team takes pride in what we accomplish and our results speak
            for themselves.{' '}
          </p>
          <br />
          <h2>Things we have accomplished</h2>
          <p>
            Currently, we are providing our services to the highest number of
            student clubs in uOttawa’s 172 years as an institution, with over
            360 active student groups on campus, of course despite the negative
            effect on student life by COVID.{' '}
          </p>
          <br />
          <p>
            In September 2020, we launched a brand new funding system for
            student groups, with $200,000 budgeted to be given out for student
            activities. This also is an unprecedented and highest number in
            uOttawa’s history for student clubs. The year following in 2021, we
            were able to do it all over again with another $200,000.{' '}
          </p>
          <br />
          <p>
            For the first time in a while, student groups will also be given
            storage space on campus due to our efforts with the university and
            the student union.{' '}
          </p>
          <br />
          <p>
            Two years ago we introduced the first edition of the Student Life
            Awards. An award show recognizing the hard work that university
            students put into their extracurriculars. With nearly 50 different
            groups nominated and 23 different awards to be won, it was one of
            the most diverse and largest student-run events at the university.
            We hosted it live for the first time last year - and it was one of
            the largest events during COVID at the university.{' '}
          </p>
          <br />
          <p>
            We also introduced our Clubs Conference event. A now annual event
            that takes place at the beginning of each academic year and is
            comprised of a series of workshops that serve to educate students on
            the various components of running a small team.{' '}
          </p>
          <br />
          <p>
            As one of the most well-known organizations on campus, we have also
            had the opportunity to establish a long-term partnership with the
            Royal Bank of Canada (RBC) to set up a system for clubs to make bank
            accounts with the bank.{' '}
          </p>
          <br />
          <p>
            At CVUO, I strongly believe our success can be contributed to our
            efforts in always improving the services we are providing, and as
            such every day we are coming up with new ideas on how we can
            continue to improve the student life on campus.{' '}
          </p>
          <br />
          <h2>The Team</h2>
          <p>
            Being a team still comprised majorly of student volunteers it is
            still shocking to any onlookers all that we are able to accomplish.
            Of course, I couldn’t mention all our accomplishments without
            listing every single person that has helped in making those things
            possible. I consider myself extremely lucky to be surrounded by so
            many talented people, with whom I have been blessed to create
            long-lasting friendships.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default The_Thing_I_Am_Most_Proud_Of;

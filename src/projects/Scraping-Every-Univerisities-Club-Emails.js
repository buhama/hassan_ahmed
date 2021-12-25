import { useEffect } from 'react';
import { Button, Link, useColorModeValue } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

import FadeIn from 'react-fade-in/lib/FadeIn';

const Scraping_Every_Universities_Club_Emails = () => {
  const buttonColor = useColorModeValue('purple', 'green');

  useEffect(() => {
    document.title = 'Scraping Every Universities Club Emails | Hassan Ahmed';
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
          <h1>
            How I Scrapped Every Club Email From Every Canadain University
          </h1>
        </div>
        <div className='blog-body'>
          {' '}
          <p>
            What initially started off with me getting really interested by the
            theory of 6 degrees of separation and wanting to not only prove the
            theory with an Instagram bot led to me scraping the emails of every
            student club across every university in Canada.
          </p>
          <br />
          <p>
            Running through each of their websites and trying out new strategies
            based on how their directories were built very much made me feel
            like Mark Zuccs in that first seen on the Social Network (minus the
            getting dumped part).
          </p>
          <br />
          <p>
            But very much like him, I figured I’d also write a blog on the
            experience.
          </p>
          <br />
          <p>
            Initially I had the repository public on Github, but realized that
            may not be the best idea, for anyone with poor intentions (unlike
            me, who has nothing but pure ones).
          </p>
          <br />
          <h2>uOttawa</h2>
          <p>
            Of course, I had to start with my alma mater. You’d think this would
            be an easy one, considering the current version of the uOttawa Clubs
            List is the one I put together, but I did use a third-party plugin
            to create the directory, so this took a little bit of looking still.
            For reference the clubs list is hosted on CVUO’s website at
            <a href='www.cvuo.ca/clubs-list'> www.cvuo.ca/clubs-list.</a>{' '}
          </p>
          <br />
          <p>
            Quickly learned that the plugin I used years ago is just an iframe
            code block, with the actual directory hosted on a public web page,
            which was easy to find. Just had to right click the frame and hit
            “View Frame Source” (thank you Google Chrome). From then on, I ran
            <b> Cheerio</b> with <b>Node.js </b>and <b>Express</b> to extract
            emails, which were the only &lt;a&gt; tags within each club’s info,
            which all had unique class names. So, with <b>Cheerio</b>, I first
            told it to find that unique class name, then find the &lt;a&gt; tag
            within that class name and then get the href from the &lt;a&gt; tag,
            and to do that for every element with said class name and voila I
            had all the emails.
          </p>
          <br />
          <p>
            I also found this kinda cool but the webpage where the uOttawa Clubs
            list is actually hosted is here:{' '}
            <a href='https://sheet2site-staging.herokuapp.com/api/v3/index.php?key=1EF6n8IGo4H8-2eL3iMHVItLdSGESIniTwZTEkz1HCRM&g=1&e=1&e=1'>
              {' '}
              https://sheet2site-staging.herokuapp.com/api/v3/index.php?key=1EF6n8IGo4H8-2eL3iMHVItLdSGESIniTwZTEkz1HCRM&g=1&e=1&e=1
            </a>
          </p>
          <br />
          <p>
            But that page is also making a request to this page:{' '}
            <a href='https://sheet2site-staging.herokuapp.com/api/v3/load_morenew.php/?key=1EF6n8IGo4H8-2eL3iMHVItLdSGESIniTwZTEkz1HCRM&template=Business%20Template&filter=&search=&e=1&is_filter_multi=false&domain=&length=99&page=0'>
              {' '}
              https://sheet2site-staging.herokuapp.com/api/v3/load_morenew.php/?key=1EF6n8IGo4H8-2eL3iMHVItLdSGESIniTwZTEkz1HCRM&template=Business%20Template&filter=&search=&e=1&is_filter_multi=false&domain=&length=99&page=0
            </a>
          </p>
          <br />
          <p>
            The number at the end is the number of pages for the whole
            directory, in total there are 3. I wasn't able to get all of them to
            show on one page unfortunately.
          </p>{' '}
          <br />
          <h2>Carleton</h2>
          <p>
            From what I gathered, Carleton, or rather CUSA Clubs, made their
            website using WordPress and are using a WordPress plugin for their
            club’s directory. Their directory can be found here:
            <a href='https://www.cusaclubs.ca/directory/'>
              {' '}
              https://www.cusaclubs.ca/directory/.
            </a>{' '}
          </p>
          <br />
          <p>
            The issue here was that each club’s email wasn’t listed on the
            directory until you clicked on the club, and it opened a new page
            with all the info. I did consider switching to using{' '}
            <b>Puppeteer</b>, which would let me go on their directory and then
            click on each club, but I wanted to keep using <b>Cheerio</b> for
            now (don’t worry, we’ll be forced to use <b>Puppeteer</b> a little
            bit later). What I noticed is that while there a unique and random
            ID in the URLs of each of the Clubs pages, the ID didn’t go higher
            than 3000. So I decided to create an array of URLs with the template
            of https://www.cusaclubs.ca/?post_type=job_listing&p= and added
            every number from 1800 – 3000 after the domain.
          </p>
          <br />
          <p>
            And then ran the same code that I did for uOttawa on each of those
            URLs and was able to acquire MOST of the emails. I did notice that
            some URLs of some clubs didn’t match that pattern, I’m not sure why,
            my guess is that they are old entries, so we didn’t get those, but
            that’s fine for now.{' '}
          </p>
          <br />
          <p>
            I did sort of mess up and made too many invalid requests to the CUSA
            Clubs site because of a typo in the URL so their website blocked my
            IP address. But with a VPN I was able to get back in and make just
            enough requests to get what I needed and stopped.
          </p>
          <br />
          <h2>York</h2>
          <p>
            York was easy; they had all their clubs listed in a nice HTML table
            with the email on the last column. You can see it here:
            <a href=' http://www.yfs.ca/clubsdirectory'>
              {' '}
              http://www.yfs.ca/clubsdirectory.
            </a>{' '}
          </p>
          <br />
          <p>
            The only tricky part was that the last column also included other
            contact details for the club, like a Facebook page, Instagram, etc.
            But what ended up being really helpful is that all the other contact
            details are hyperlinked, and the email isn’t. Meaning that
            everything except the email is inside an &lt;a&gt; tag. So first I
            got all the contact details, then got all the contact details that
            were inside an &lt;a&gt; tag and then removed the second part from
            the first part with simple <b>JavaScript</b> string manipulation and
            was left with just the email.{' '}
          </p>
          <br />
          <h2>UofT</h2>
          <p>
            For UofT, they have a much bigger list of clubs on the official
            universities site as opposed to their student unions, so I went with
            that. You can find it here:
            <a href=' https://www.ulife.utoronto.ca/organizations/list/page/'>
              {' '}
              https://www.ulife.utoronto.ca/organizations/list/page/
            </a>
          </p>
          <br />
          <p>
            Big issue with UofT is that like Carleton, the have individual pages
            for each club with unique IDs in the URL. But with UofT their unique
            IDs are 6 digits long, so just force searching every possible URL
            would be silly. I still wanted to continue using <b>Cheerio</b> so
            my strategy ended up being to get each clubs URL from the directory,
            saving all those URLs in an array and then finding the email in each
            of those URLS using the same approach as before.{' '}
          </p>
          <br />
          <p>
            One small hiccup was that while I could get all the URLs from the
            directory, the directory itself had 43 pages. So, I had to first
            loop through the URLs of each of the pages on the directory,
            extracting each URL of the clubs on each page, and then loop through
            all the collected URLs and extract emails.{' '}
          </p>
          <br />
          <p>
            Not the most ideal but it ended up working pretty well and we got
            almost 1000 club emails.{' '}
          </p>
          <br />
          <h2>Queens, Ryerson & Western</h2>
          <p>
            These three are put together because their clubs directories are all
            made by one company called Campus Labs. You can see Ryerson’s here:
            <a href='https://connectru.ryerson.ca/organizations'>
              {' '}
              https://connectru.ryerson.ca/organizations
            </a>
            , the others look and behave exactly the same.{' '}
          </p>
          <br />
          <p>
            This was our first big road block, because I believe Campus Labs
            uses React.js for their sites, which utilizes Client-Side rendering
            and if you try to view the page source, you pretty much get nothing.
            Which makes it impossible to scrape using <b>Cheerio</b>.{' '}
          </p>
          <br />
          <p>
            At first, I had given up because I had my fun but then I got random
            1am motivation and installed <b>Puppeteer</b>. <b>Puppeteer</b> lets
            me open up a browser and inspect element the HTML, which is just
            what I need to scrape React based sites. Also, a little shout out to
            my original goal of wanting to scrape Instagram, which is also a
            React site.{' '}
          </p>
          <br />
          <p>
            To make things a little easier I first tried to see what Fetch
            requests Campus Labs was making when loading up the directory and
            found something very helpful that made everything a lot easier. The
            data for the directory was being pulled from a JSON file and
            included a variable called ‘Website Key’. This variable is the
            unique ID that goes into the URL for each of the clubs, meaning I
            didn’t have to get those URLs myself, which was nice. You can see
            Ryerson’s JSON file if you want here:
            <a href='https://connectru.ryerson.ca/api/discovery/search/organizations?orderBy%5B0%5D=UpperName%20asc&top=1000&filter=&query=&skip=0'>
              {' '}
              https://connectru.ryerson.ca/api/discovery/search/organizations?orderBy%5B0%5D=UpperName%20asc&top=1000&filter=&query=&skip=0
            </a>
            . The interesting part was also adding 'top=1000' to show a max list
            of 1000 clubs. It defaults to something like 20, which is not
            helpful.
          </p>
          <br />
          <p>
            I used the Website Keys to create an array with all the URLs I
            wanted to visit with <b>Puppeteer</b> and on those URLs I had{' '}
            <b>Puppeteer</b> find the correct class name where the email was
            nested. But another roadblock was that the email itself didn’t have
            a unique class name and it also wasn’t inside an &lt;a&gt; tag, so I
            couldn’t think of a smart way to just get the email. So, instead I
            got everything from the Clubs Info section and then used Regex to
            filter out anything that looked like an email. Which ended up
            working perfectly.{' '}
          </p>
          <br />
          <p>
            Another issue was that since I was using synchronous{' '}
            <b>JavaScript</b> & <b>Node JS</b> didn’t like me making so many
            Promises (or requests for those less JS inclined) simultaneously. I
            even tried parallel processing, but it just ended up taking too much
            memory. So I opted instead for switching to an asynchronous
            function, which takes a long time to get all the emails, but it’s
            not a big deal from what I’m trying to do here.{' '}
          </p>
          <br />
          <p>
            Campus Labs made things pretty hard but once I got one of the unis
            using Campus Labs, I just had to run the exact same code on the
            other, so it wasn’t that bad.{' '}
          </p>
          <br />
          <h2>Brock</h2>
          <p>
            Brock was pretty easy, they had all their clubs listed on one page
            which you can see here:
          </p>
          <br />
          <p>
            {' '}
            <a href='https://www.brockbusu.ca/involvement/clubs/directory/'>
              {' '}
              https://www.brockbusu.ca/involvement/clubs/directory/
            </a>
          </p>
          <br />
          <p>
            The big issue was that while we can see the emails in their original
            format on the website, they are actually encrypted using Cloud Fares
            encryption, specifically to prevent people like me from getting
            those emails. That’s the best protection I’ve seen so far so props
            to you Brock. Unfortunately Cloud Fare’s encryption is very easy to
            break and I found a million code samples for it online, so I just
            added a decryption function and we got the Brock emails really
            easily.{' '}
          </p>
          <br />
        </div>
      </FadeIn>
    </div>
  );
};

export default Scraping_Every_Universities_Club_Emails;

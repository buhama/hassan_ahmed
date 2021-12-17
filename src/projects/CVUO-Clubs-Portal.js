import { Button, Link, useColorModeValue } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const CVUO_Clubs_Portal = () => {
  const buttonColor = useColorModeValue('purple', 'green');

  return (
    <div className='blog'>
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
        <h1>CVUO Clubs Portal</h1>
      </div>
      <div className='blog-body'>
        {/* TODO: Add Blog Images */}{' '}
        <p>
          CVUO has been managing clubs for two years and has been conducting all
          internal logistics manually. When clubs submitted applications, those
          applications were manually added to a Google Sheet, the clubs were
          manually added to the CVUO Website as a “Blog” post, every update was
          requested through email and then done manually, and so and so forth.
          When taking on the challenge of managing the club system at uOttawa,
          the internal logistics were not a consideration, and every logistical
          problem was dealt with as it came forward, and many times with a lot
          of additional work hours.
        </p>
        <br />
        <p>
          A better system would automate repetitive tasks, gives clubs control
          of their public profiles, create an easy to access database for the
          CVUO executives and be cost-efficient.
        </p>
        <br />
        <p>
          While searching for a solution we were approached by external
          contractors that seemed to offer what we were looking for, an
          all-in-one solution that would cost a fortune, but would save us 100s
          of hours yearly. After starting a trial with one of the more promising
          contractors, it was shown that while external companies could solve
          some problems, they came with their own issues and weren’t the perfect
          solution we were looking for and were far too costly.
        </p>
        <br />
        <p>
          So, what do you do at that point? Put on your big boy gloves and just
          create the system yourself.
        </p>
        <br />
        <p>
          At first, we investigated SQL solutions and then Microsoft Access.
          Both improved what we were working with in the past (essentially a
          dozen spreadsheets), but they had their own issues. For one the
          learning curve was too high, which was a problem as CVUO executives
          almost entirely cycle out every 3-4 years, due to it being a
          student-run organization. A lot of time was spent on creating a
          Microsoft Access database, but it didn’t end up being, what we needed.
        </p>
        <br />
        <p>
          While working with Microsoft Access, we also looked into having a
          back-end portal to the CVUO website. The initial goal of that was
          solely to have a place for clubs to see the most up-to-date
          information and links regarding various club-related information. But
          it later transformed into a lot more than that.
        </p>
        <br />
        <p>
          MemberStack was recommended by the executives of the Mechanical
          Engineering Student Society, who had been using it to have a backend
          login for Mechanical Engineering students to have access to past
          exams. Eventually, things really all came together when we first
          discovered Sheet2site, and the numerous integrations available with
          Zapier. A system using MemberStack, Google Sheets, Squarespace Forms,
          Sheet2site, Zapier & JotForm, all in tandem with each other ended up
          being our near-perfect solution, which I hope will save all future
          CVUO executives countless hours and let clubs update their information
          themselves.
        </p>
        <br />
        <h2>Quick Descriptions on Key Tools and Services</h2>
        <br />
        <Link href='https://www.memberstack.com/' isExternal color='blue.500'>
          <h3>MemberStack</h3>
        </Link>
        <br />
        <p>
          MemberStack is a no-code solution for developers to create member
          logins for their websites. It integrates really well with website
          builders like Webflow and Squarespace.
        </p>
        <br />
        <Link href='https://zapier.com/' isExternal color='blue.500'>
          <h3>Zapier</h3>
        </Link>
        <br />
        <p>
          Zapier is a service that can connect different apps and websites to
          make them work together. For example, if one thing happens on one
          website, it makes something happen on another website.
        </p>
        <br />
        <Link href='https://www.sheet2site.com/' isExternal color='blue.500'>
          <h3>Sheet2Site</h3>
        </Link>
        <br />
        <p>
          Sheet2site is a service that allows users to create websites from
          Google Sheets. More specifically for this use, they allow the creation
          of a front-end database to be linked back to a Google Sheet.
        </p>
        <br />
        <Link href='https://www.jotform.com/' isExternal color='blue.500'>
          <h3>Jotform</h3>
        </Link>
        <br />
        <p>
          Jotform is a form creation tool that doesn’t require a login from the
          user.
        </p>
        <br />
        <h2>Clubs Portal Key Features</h2>
        <br />
        <h3>
          A constantly updated Master Sheet with all the information from every
          club.{' '}
        </h3>
        <br />
        <p>
          The Master Sheet is a Google Sheets file saved on the CVUO Google
          Drive. It contains all the information on a club from their logo,
          constitution, social links to their club funding details. The same
          Google Sheet also collects Club and Association Registration
          Applications in both English and French. All the registration is
          conducted through Jotform, through 4 different forms, two for Club
          Registration in both English and French and then also two for
          Association Registration in both English and French. Every submission
          to those 4 forms is linked to a unique tab on the Master Sheet file,
          labeled “All Applications” and sorted by submission date. This allows
          the CVUO executives to review each application in one place and in the
          order that they come through. While there are small differences
          between the Association and Club registration forms, they are largely
          the same, and placing all applications in one place is practical for
          review.
        </p>
        <br />
        <p>
          Once the applications are reviewed by a CVUO executive and approved,
          they are added manually as a member on the CVUO MemberStack. As soon
          as a new member is added it is linked back to the same Google Sheets,
          to a new tab for all approved clubs. This tab has extra columns
          regarding club information that are not provided through the initial
          application, namely the Club Funding information. This information is
          later updated on each club’s profile through MemberStack manually.
        </p>
        <br />
        <h3>The ability for clubs to update their information themselves. </h3>
        <br />
        <p>
          With MemberStack and Squarespace a back end on the CVUO website was
          easily made, it is the primary service that MemberStack offers. From
          there a series of Squarespace Forms were made, where clubs could
          submit new information about their club. Instead of using the
          Squarespace forms as is, their HTML was copied and modified, where
          each of the questions linked to the MemberStack API. The HTML was then
          pasted to a page on the website part of the Clubs Portal. When clubs
          fill out the forms it automatically updates their MemberStack profile.
        </p>
        <br />
        <p>
          This however didn’t update the Master Sheet with all the clubs’
          information, because while a new item was added on the Google Sheet
          when a new MemberStack profile was created, it was not in any way
          linked to MemberStack beyond that. However, this was solved via a
          Zapier integration. The Zapier integration is triggered when a
          MemberStack profile is updated, it would then find that record on the
          Google Sheet by matching the Club IDs from the MemberStack profile
          that is being updated and also updates the entire row with the new
          MemberStack profile information.
        </p>
        <br />
        <p>
          This allowed the Master Sheet to be constantly updated and allowed
          clubs to be able to update their information on their own.
        </p>
        <br />
        <h3>
          The ability for club updates to reflect on the Official Clubs List.
        </h3>
        <br />
        <p>
          A simple solution to having the Official Clubs List be up to date and
          to reflect the club database, aka the Master Sheet, would be to link
          that same Master Sheet to the public website. Sheet2site would offer
          this exact service. One complication being that the Google Sheet that
          Sheet2site links to the website need to be public and the Master Sheet
          contains personal information of uOttawa students. So, another two
          Google Sheets are connected to the website, one for each language.
        </p>
        <br />
        <p>
          The way these sheets stay updated is via a Google Sheets formula that
          connects separate Google Sheets with a range parameter. As such these
          sheets for the website connect to the Master Sheet but only the
          columns that are needed for the website – no personal information gets
          moved. When the Master Sheet updates, the website sheets update and
          the most recent information is reflected on the Official Clubs List.
        </p>
        <br />
        <p>
          When importing from the Master Sheet to the public sheets, the clubs
          are also sorted randomly. They are randomly sorted every time a change
          is made to the Master Sheet, as in every time a club updates their
          info or a CVUO exec opens the sheets, they reorder, allowing for the
          clubs to show in random order on the CVUO website.
        </p>
        <br />
        <p>
          A difficulty arises for when clubs want to update their logo, as it is
          not simply a text field. Sheet2site allows for images to be
          transferred from Google Sheet to the website if there is a public URL
          for the image. One option was considered to ask clubs to create public
          URLs for their logos and then copy-paste the links to a form. However,
          to make things easier, a Jotform was instead created to accept logo
          changes. The Jotform asks the club for their Club ID and then a Zapier
          Integration triggers that finds the row on the Master Sheet with the
          submitted Club ID and switches out the club logo with the new one. One
          drawback of this system is that the MemberStack profile will not be
          updated, as the integration between the Master Sheet and MemeberStack
          only works one way.
        </p>
        <br />
        <h3>
          The ability for club updates to reflect on the Official Clubs List.
        </h3>
        <br />
        <p>
          A simple solution to having the Official Clubs List be up to date and
          to reflect the club database, aka the Master Sheet, would be to link
          that same Master Sheet to the public website. Sheet2site would offer
          this exact service. One complication being that the Google Sheet that
          Sheet2site links to the website need to be public and the Master Sheet
          contains personal information of uOttawa students. So, another two
          Google Sheets are connected to the website, one for each language.
        </p>
        <br />
        <p>
          The way these sheets stay updated is via a Google Sheets formula that
          connects separate Google Sheets with a range parameter. As such these
          sheets for the website connect to the Master Sheet but only the
          columns that are needed for the website – no personal information gets
          moved. When the Master Sheet updates, the website sheets update and
          the most recent information is reflected on the Official Clubs List.
        </p>
        <br />
        <p>
          When importing from the Master Sheet to the public sheets, the clubs
          are also sorted randomly. They are randomly sorted every time a change
          is made to the Master Sheet, as in every time a club updates their
          info or a CVUO exec opens the sheets, they reorder, allowing for the
          clubs to show in random order on the CVUO website.
        </p>
        <br />
        <p>
          A difficulty arises for when clubs want to update their logo, as it is
          not simply a text field. Sheet2site allows for images to be
          transferred from Google Sheet to the website if there is a public URL
          for the image. One option was considered to ask clubs to create public
          URLs for their logos and then copy-paste the links to a form. However,
          to make things easier, a Jotform was instead created to accept logo
          changes. The Jotform asks the club for their Club ID and then a Zapier
          Integration triggers that finds the row on the Master Sheet with the
          submitted Club ID and switches out the club logo with the new one. One
          drawback of this system is that the MemberStack profile will not be
          updated, as the integration between the Master Sheet and MemeberStack
          only works one way.
        </p>
        <br />
        <h3>Club Events Calendar That Adds Events Instantly</h3>
        <br />
        <p>
          Sheet2site was used again. Two sheets were made, one for French and
          one for English. This time, however, there was no need for a Master
          Sheet as the events didn’t contain the personal information of any
          students. The English sheet is connected to a Jotform, where clubs can
          submit their event information. One preliminary step is to verify that
          only registered clubs can get their events featured, as the Jotform
          can be passed around easily. This is done by asking for clubs to
          submit the club ID in the Jotform. The magic however happens back on
          the Google Sheet, where all the applications, regardless of correct ID
          or not are added to one tab on the sheet and then only added to a
          second tab if the correct ID is added to the application.
        </p>
        <br />
        <p>
          This is done by having a third tab on that same Google Sheet, that
          uses the same connection capabilities from before on Google Sheets to
          import the Club IDs from the Master Sheet to this third tab. The
          aforementioned second tab adds all the events from the applications
          only if the Club ID from the submissions matches any of the IDs from
          the Master Sheet. The Club Name is also added by their Club ID. There
          is one extra filter in this connection, which is the date, so events
          with dates in the past are filtered out as well. The events are also
          sorted by their date, so they show up in the correct order.
        </p>
        <br />
        <p>
          The French sheet simply connects to the English Sheet, but only with
          the events that pass the preliminary ID and date check and only
          publishes the French part of the submission.
        </p>
        <br />
        <h3>
          A constantly updated Excel Online sheet shared with Conventions and
          Reservations for VEMS logins
        </h3>
        <p>
          One major aspect of the system that always needed to be considered was
          that the Conventions and Reservations department at the University of
          Ottawa would always need an up-to-date file with all the club signing
          officer information. Our Master Sheet could not be shared with the
          departments’ staff as uOttawa has transitioned to using Microsoft Apps
          instead of Google ones.
        </p>
        <br />
        <p>
          One major aspect of the system that always needed to be considered was
          that the Conventions and Reservations department at the University of
          Ottawa would always need an up-to-date file with all the club signing
          officer information. Our Master Sheet could not be shared with the
          departments’ staff as uOttawa has transitioned to using Microsoft Apps
          instead of Google ones.
        </p>
        <br />
        <p>
          As such, an Excel Online file was created that was shared between CVUO
          and Conventions and Reservation, as some CVUO team members have UOSU
          emails which are also Microsoft Emails. The file is updated via
          Zapier. Every time a new profile is created on MemberStack, it adds a
          new row on the Excel file and every time MemberStack is updated it
          finds the row with the same ID as the updated MemberStack profile and
          rewrites the row.
        </p>
        <br />
        <p>
          The final step for the Conventions and Reservations documents is that
          there is also a Zapier connection that connects the Squarespace form
          that clubs change their signing officers on to a tab on that Excel
          Online file, which essentially logs every signing officer change.
        </p>
        <br />
        <h3>Future Improvements</h3>
        <br />
        <p>
          During the semesterly clubs’ review, many clubs end up discounting and
          must be deleted from all our files. The system doesn’t currently allow
          for mass deletion of clubs, or really any good way to delete a club
          from the database. This will definitely need to be implanted through
          more Zapier and MemberStack integrations.
        </p>
        <br />
        <p>
          It would be more aesthetically pleasing if fields that were empty for
          each club didn’t show up on the clubs’ list or the events list.
        </p>
      </div>
    </div>
  );
};

export default CVUO_Clubs_Portal;

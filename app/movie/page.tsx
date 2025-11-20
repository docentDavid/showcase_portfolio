import Image from "next/image";

export default function Movie() {
  return (
    <main>
      <section className="movie-home">
        <p>A semi functional movie website where anyone can search for a movie they like, save it and watch it.</p>
        <Image
          src="/images/movie.gif"
          className="picoogif"
          alt="Movie gif"
          width={1905}
          height={866}
          unoptimized
        />
      </section>

      <section className="row1">
        <div className="project_overview-movie">
          <h1>Project Overview</h1>
          <Image src="/images/movie.png" alt="Movie image" width={186} height={332} />
        </div>
        <div className="project_overview_description-movie">
          <p>The project was fully made just by myself to learn React framework for people who want to watch a movie but don’t know
            which one, so I made it possible to search by genre and add it to “favorites” in case you find a movie you might like butstill want to keep
            searching for a better one. Once you decided to watch, you can go to “Favorites” page and find the savedmovie to enjoy it!</p>
          <div className="row2">
            <div className="client-role-timeline-tools">
              <h4>Client:</h4>
              <h4>Purpose:</h4>
              <h4>Timeline:</h4>
              <h4>Role:</h4>
            </div>
            <div className="client-role-timeline-tools-description">
              <p>No client</p>
              <p>Learn React and improve coding skills</p>
              <p>2 weeks</p>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="column1picoo">
        <div className="challenge-strategy-row-movie">
          <aside className="challenge_column">
            <div className="heading-and-icon-row">
              <Image src="/images/challengeicon.png" alt="Challenge icon" width={30} height={30} />
              <h2>The challenge</h2>
            </div>
            <ul>
              <li>Learning React framework</li>
              <li>Finding the best movie to watch best on user’s preferences</li>
              <li>Finishing the project within 2 weeks</li>
              <li>Improving my technical skills</li>
            </ul>
          </aside>
          <aside className="strategy_column">
            <div className="heading-and-icon-row">
              <Image src="/images/strategyicon.png" alt="Strategy icon" width={33} height={33} />
              <h2>The strategy</h2>
            </div>
            <ul>
              <li>Following a tutorial and actually code myself afterwards to learn things</li>
              <li>Test on different people if they are able to find a movie they would like to watch</li>
              <li>Keep in mind new things I learned from this project to use them in the future real client-projects.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="impact-results-column">
        <h1>Impact & Results</h1>
        <aside className="movie-column"> 
          <div className="movie-row">
            <div className="box1-movie">
              <h3>My thoughts</h3>
              <p>During this project the most important thing I learned is React framework, I got to know the basics and how to work with API’s which is something important to know for future Frontend projects. Also, I got the opportunity to test my product with end users, listen to their opinion and improve my product.</p>
            </div>
            <div className="box2-movie">
              <h3>Feedback from user</h3>
              <p>“I was able to find a movie for me to watch later by searching for romantic genre. I liked that I can save the movie so in case I forget the name I can easily find it on “Favorite” page” <strong className="strong">-  Cristi Todei</strong></p>
            </div>
          </div>
          <div className="box3-movie">
            <h3>Feedback from user</h3>
            <p>“I liked the concept of the website, I was able to find a movie to watch even if I don’t think I’m very technical, though I still think there is some place for improvement on the design of the website, as for example Netflix looks cooler.” <strong className="strong">-  Vladislav Sculin</strong></p>
          </div>
        </aside>
      </section>
    </main>
  );
}
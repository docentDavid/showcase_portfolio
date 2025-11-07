export default function Picoo() {
  return (
    <main>
      <section className="picoo-home">
        <div className="picoologotext">
          <img src="/images/picooimg.png" className = "picooimg"alt="Picoo image" />
          <p>A simple, user friendly website that helps primary schools teachers create a quiz fast and efortless.</p>
        </div>
        <img src="/images/picoo.gif"  className="picoogif" alt="Picoo gif" />
      </section>

      <section className="row1">
        <div className="project_overview">
          <h1>Project Overview</h1>
          <img src="/images/picoo_device.png" alt="Picoo device image" />
        </div>
        <div className="project_overview_description">
          <p>The project focused on creating an additional service to already existing brand and website giving
            the opportunity for primary school teachers to create their own quiz in case if existing quizzes don’t fit them.
            The project goal was to increase the sales of picoo devices by implementing an additional usefull feature for users.</p>
          <div className="row2">
            <div className="client-role-timeline-tools">
              <h4>Client:</h4>
              <h4>Role:</h4>
              <h4>Timeline:</h4>
              <h4>Tools:</h4>
            </div>
            <div className="client-role-timeline-tools-description">
              <p>Iris Soute (CEO of Picoo company)</p>
              <p>UI/UX designer and Developer</p>
              <p>10 weeks</p>
              <p>Figma, JavaScript, HTML and CSS</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    
  );
}
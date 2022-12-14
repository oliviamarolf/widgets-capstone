export default function About() {
  return (
    <div className="about-card">
      <div className="about-container">
        <div className="about-title">
          <h1>ABOUT</h1>
        </div>

        <div className="about-content">
          <div className="left-container">
            <div className="description-container">
              <h2>Description</h2>
              <div className="content-container">
                <p>
                  In this application you will find widigets that have been made
                  using React. They are a result of the application of concepts
                  that were introduced during the front end course.
                </p>
              </div>
            </div>

            <div className="description-container">
              <h2>Overview</h2>
              <div className="content-container">
                <p>
                  Throughout the front end course we have covered everthing from
                  html/css basics to intermediate React concepts. While
                  attending class, completing challenges, and building
                  capstones, my understanding has greatly imporoved. The
                  application of the concepts that were covered made it possible
                  for me to grow my confidence, and become comfortable building
                  front end applications.
                </p>
              </div>
            </div>
          </div>

          <div className="right-container">
            <h1>Concepts</h1>

            <div className="concepts-container">
              <div className="card">
                <h3>Hooks</h3>
              </div>
              <div className="card">
                <h3>Custom hooks</h3>
              </div>
              <div className="card">
                <h3>Props</h3>
              </div>
              <div className="card">
                <h3>State</h3>
              </div>
              <div className="card">
                <h3>Components</h3>
              </div>
              <div className="card">
                <h3>Lifecycle</h3>
              </div>
              <div className="card">
                <h3>Routing</h3>
              </div>
              <div className="card">
                <h3>Fetch</h3>
              </div>
              <div className="card">
                <h3>Event handling</h3>
              </div>
              <div className="card">
                <h3>Fontawesome</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Card from "react-bootstrap/Card";

const Card_findJob = () => {
  return (
    <>
      <div>
        <section id="portfolio" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3 className="section-title " style={{ textAlign: "center" }}>
                {" "} Showcase Job Postings{" "}
              </h3>
            </header>
            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                <div className="portfolio-wrap">
                  <Card>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-wrap">
                  <Card>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="portfolio-wrap">
                  <Card>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="/">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
                <div className="portfolio-wrap"></div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-wrap">
                  <Card>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-wrap">
                  <Card>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card_findJob;

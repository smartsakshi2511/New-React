import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button, Card } from 'react-bootstrap';

const JobPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const provinces = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin',
    // ... (other provinces in Turkey)
  ];

  const districts = [
    'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan', 'Altındağ', 'Gölbaşı', 'Çubuk', 'Polatlı',
    // ... (other districts in Turkey)
  ];

  const drivers = [
    { name: 'John Doe', vehicle: 'Truck', location: 'Ankara, Çankaya', districts:'Çubuk' },
    { name: 'Jane Doe', vehicle: 'Car', location: 'Istanbul, Kadıköy' },
    { name: 'Bob Smith', vehicle: 'Bike', location: 'Izmir, Bornova' },
    { name: 'Alice Johnson', vehicle: 'Tank', location: 'Adana, Seyhan' },
    { name: 'Shveta Maddhesiya', vehicle: 'A1 Bike ', location: 'Ankara, Antalya' },
    { name: 'Jane Doe', vehicle: 'Car', location: 'IGölbaşı, Kadıköy' },
    { name: 'Bob Smith', vehicle: 'Bike', location: 'Izmir, Sincan' },
    // ... (other driver data)
  ];

  const handleSearch = () => {
    const filteredResults = drivers.filter(driver =>
      driver.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col md={6} className="mx-auto">
          <Form>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search for drivers by vehicle or Provinces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
              <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>

      <Row>
        {searchResults.map((result, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card style={{border:"2px solid black",}}>
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>
                  Vehicle: {result.vehicle}<br />
                  Location: {result.location}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobPortal;

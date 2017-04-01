import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Header, Icon } from 'semantic-ui-react';

const JobPost = (props) => {
  console.log('props passed to jobPost', props);
  const { id } = props.params;
  return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <Header as="h3" icon textAlign="center">
             Job Post # { id }
            <Icon link name="briefcase" circular />
          </Header>
          <hr />
        </Col>
      </Row>
    </Grid>
  );
};

export default JobPost;

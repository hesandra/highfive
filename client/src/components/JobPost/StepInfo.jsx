import React from 'react';
import { Step } from 'semantic-ui-react';

const steps = [
  { icon: 'user', title: 'Question # 1', description: 'Behavioral Question' },
  { icon: 'question', title: 'Question # 2', description: 'Algorithmic' },
  { icon: 'cubes', title: 'Question # 3', description: 'System Design' },
];

const StepInfo = () => {
  return (
    <div>
      <Step.Group size="small" items={steps} />
    </div>
  );
};

export default StepInfo;

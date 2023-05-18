export const approveNodes = [
  {
    type: 'apply',
    label: '',
    style: {
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      border: '2px solid #FF6347',
    },
    property: {
      username: '',
      time: '',
      startTime: '',
      endTime: '',

    }
  },
  {
    type: 'approver',
    label: '',
    style: {
      width: '24px',
      height: '24px',
      borderRadius: '0px',
      border: '2px solid #3CB371',
    }
  },
  {
    type: 'jugement',
    label: '',
    style: {
      width: '20px',
      height: '20px',
      border: '2px solid #6495ED',
      transform: 'rotate(45deg)',
    }
  },
];


export const themeApprove = {
  rect: {
    radius: 8,
    stroke: '#3CB371'
  },
  circle: {
    r: 25,
    stroke: '#FF6347'
  },
  polygon: {
    stroke: '#6495ED',
  },
  polyline: {
    strokeWidth: 1,
  },
  edgeText: {
    background: {
      fill: 'white',
    },
  },
  nodeText: {
    fontSize: 16,
  }
}

export const data = {}
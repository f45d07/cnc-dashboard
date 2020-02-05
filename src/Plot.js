import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Plot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ReactEcharts
                option={{
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    /*
                    legend: {
                        orient: 'vertical',
                        left: 10,
                        data: ['# 1', '# 2', '# 3', '# 4', '# 5']
                    },
                    */
                    legend: null,
                    series: [
                        {
                            name: 'Plot',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                { value: 335, name: '# 1' },
                                { value: 310, name: '# 2' },
                                { value: 234, name: '# 3' },
                                { value: 135, name: '# 4' },
                                { value: 1548, name: '# 5' }
                            ]
                        }
                    ]
                }}
            />
        );
    }
}

export default Plot;
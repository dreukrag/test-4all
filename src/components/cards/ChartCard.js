import Chart from 'chart.js';
import React from 'react';
import BaseCard from '../BaseCard';
import ButtonMenu from'../ButtonMenu'

import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

import MoreHoriz from '@material-ui/icons/MoreHoriz';
import uniqid from 'uniqid';

import axios from 'axios';

const FlexBox=(props)=>(<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}} {...props}>{props.children} </div>)
const FlexSection=(props)=>(<section  style={{display:'inline-flex', flex:'1'}} {...props}> {props.children}</section>)

export default class ChartCard extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          chartType: 'line',
          canvasId:uniqid.time(),
          chartData:{month:[], views:[]}
        };
    }

    render = () =>(
        <BaseCard 
            titleContent={
                <FlexBox >
                    <FlexSection style={{justifyContent: 'flex-start'}} >
                        <ButtonMenu>
                            <MenuItem children="Colunas" onClick={(e)=>{this.setChartType(e,'bar')}} />
                            <MenuItem children="Torta" onClick={(e)=>{this.setChartType(e,'pie')}} />
                            <MenuItem children="Linhas" onClick={(e)=>{this.setChartType(e,'line')}} />
                            <MenuItem children="Doughnut" onClick={(e)=>{this.setChartType(e,'doughnut')}} />
                            <MenuItem children="Polar" onClick={(e)=>{this.setChartType(e,'polarArea')}} />
                        </ButtonMenu>
                    </FlexSection>
                    <FlexSection style={{justifyContent: 'flex-end'}} >
                        <IconButton>
                            <MoreHoriz/>
                        </IconButton>
                        <IconButton>
                            {/* <Close onClick={(e)=>{this.props.deleteFunc(e, this.props.id)}}/> */}
                        </IconButton>
                    </FlexSection>
                </FlexBox>
            }
        >
        {/*TO-DO: Arrumar o tamanho do gráfico para desktop, style funciona bem para mobile*/}
            <section style={{ maxHeight: '75vh' }} >
                <canvas id={this.state.canvasId} ></canvas>
            </section>
        </BaseCard>
        
    )

    setChartType = (e, tp) =>{
        e.preventDefault();
        this.setState({chartType:tp});
    }

    getChartData = () =>{
        axios.get('http://dev.4all.com:3050/pageViews').then(response => {
            var views = [];
            var month = [];
            console.log(response.data)
            response.data.forEach(function(el) {
                month.push(el.month)
            }, this);
            response.data.forEach(function(el) {
                views.push(el.views)
            }, this);
            this.setState({chartData:{month:month, views:views}})
        });
    }
    
    componentDidMount = () => {
        this.getChartData();
        this.BuildChart(null, null, null);
    };

    componentDidUpdate =()=>{
        this.BuildChart(null, null, null);
    }

    BuildChart = (data, canvas, type) => {
        //TO-DO: Usar argumentos?
        var chartLabel = this.state.chartData.month;
        var chartData = this.state.chartData.views;

        var ctx = document.getElementById(this.state.canvasId);
        var myChart = new Chart(ctx, {
            options:{
                responsive:true,
                onResize:(a,e)=>this.BuildChart()
            },
          type: this.state.chartType,
          data: {
            labels: chartLabel,
            datasets: [{
              label: 'Pageviews',
              data: chartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.85)',
                'rgba(54, 162, 235, 0.85)',
                'rgba(255, 206, 86, 0.85)',
                'rgba(75, 192, 192, 0.85)',
                'rgba(153, 102, 255, 0.85)',
                'rgba(255, 159, 64, 0.85)',
                'rgba(132, 255, 99, 0.85)',
                'rgba(235, 54, 162, 0.85)',
                'rgba(86, 255, 206, 0.85)',
                'rgba(192, 75, 192, 0.85)',
                'rgba(255, 153, 102, 0.85)',
                'rgba(64, 255, 159, 0.85)'

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(132, 255, 99, 1)',
                'rgba(235, 54, 162, 1)',
                'rgba(86, 255, 206, 1)',
                'rgba(192, 75, 192, 1)',
                'rgba(255, 153, 102, 1)',
                'rgba(64, 255, 159, 1)'
              ],
              borderWidth: 1
            }]
          }
        });
      }
}    
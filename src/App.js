import React, { Component } from 'react';
import './App.css';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref('INDOOR_MAP');

        this.state = {
            users: [],
            frameCount: 0
        }

        this.canvas = this.canvas;
        this.context2D = this.context2D;
        this.padding = this.padding;

        this.frameCount = this.frameCount;

        this.ALLMAPINFO = [[
            {
                title: '1',
                x: 0,
                y: 0,
                width: 171,
                height: 283,
                color: "rgba(76, 181, 216, 0.2)",
                bordercolor: "rgba(76, 181, 216, 1)"
            },
            {
                title: '2',
                x: 0,
                y: 284,
                width: 171,
                height: 286,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '3',
                x: 0,
                y: 570.5,
                width: 171,
                height: 246,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '4',
                x: 0,
                y: 871,
                width: 119,
                height: 223,
                color: "rgba(225, 215, 155, 0.1)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '5',
                x: 119,
                y: 871,
                width: 52,
                height: 223,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '6',
                x: 0,
                y: 1094,
                width: 171,
                height: 81,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '7',
                x: 243,
                y: 51,
                width: 131,
                height: 193,
                color: "rgba(220, 169, 105, 0.2)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '8',
                x: 409,
                y: 51,
                width: 392,
                height: 162,
                color: "rgba(220, 169, 105, 0.2)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '9',
                x: 409,
                y: 213,
                width: 302,
                height: 107,
                color: "rgba(225, 215, 155, 0.1)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '10',
                x: 409,
                y: 320,
                width: 392,
                height: 140,
                color: "rgba(220, 169, 105, 0.2)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '11',
                x: 243,
                y: 283,
                width: 131,
                height: 177,
                color: "rgba(220, 169, 105, 0.2)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '12',
                x: 243,
                y: 533,
                width: 99,
                height: 275,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '13',
                x: 342,
                y: 533,
                width: 160,
                height: 150,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '14',
                x: 502,
                y: 533,
                width: 146,
                height: 150,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '15',
                x: 648,
                y: 533,
                width: 153,
                height: 150,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '16',
                x: 684,
                y: 683,
                width: 117,
                height: 163,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '17',
                x: 684,
                y: 846,
                width: 117,
                height: 179,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '18',
                x: 243,
                y: 808,
                width: 99,
                height: 217,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '19',
                x: 342,
                y: 683,
                width: 342,
                height: 342,
                color: "rgba(100, 100, 100, 0.1)",
                bordercolor: "rgba(100, 100, 100, 0.85)",
            },
            {
                title: '20',
                x: 387,
                y: 1025,
                width: 297,
                height: 103,
                color: "rgba(225, 215, 155, 0.1)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '21',
                x: 297,
                y: 1128,
                width: 450,
                height: 47,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '22',
                x: 886,
                y: 0,
                width: 194,
                height: 352,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '23',
                x: 886,
                y: 352,
                width: 194,
                height: 306,
                color: "rgba(230, 110, 250, 0.2)",
                bordercolor: "rgba(230, 110, 250, 1)",
            },
            {
                title: '24',
                x: 886,
                y: 658,
                width: 194,
                height: 115,
                color: "rgba(225, 215, 155, 0.1)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '25',
                x: 922,
                y: 817,
                width: 79,
                height: 70,
                color: "rgba(225, 215, 155, 0.1)",
                bordercolor: "rgba(220, 169, 105, 1)",
                imageurl: '',
            },
            {
                title: '26',
                x: 1001,
                y: 817,
                width: 79,
                height: 70,
                color: "rgba(225, 215, 155, 0.1)",
                bordercolor: "rgba(220, 169, 105, 1)",
            },
            {
                title: '27',
                x: 886,
                y: 887,
                width: 194,
                height: 288,
                color: "rgba(76, 181, 216, 0.1)",
                bordercolor: "rgba(76, 181, 216, 0.85)",
            },
        ]]
        this.MAPINFO = this.ALLMAPINFO[0];

        this.circle1 = {
            x: 50,
            y: 50,
            radius: 25,
        }
        this.circle2 = {
            x: 100,
            y: 100,
            radius: 25,
        }

        this.circles = [];

        this.circles.push(this.circle1);
        this.circles.push(this.circle2);
    }

    componentWillMount() {
        this.db.on('value', snapshot => {
            var users = [];
            snapshot.forEach((data) => {
                var user = data.val();
                users.push(user);
            })

            this.setState({
                users: users,
            });
        });
    }

    componentDidMount() {
        this.init();
        this.drawMapInfo();
        this.drawGrid();
        this.userLocations();
    }

    componentDidUpdate() {
        this.init();
        this.drawMapInfo();
        this.drawGrid();
        this.userLocations();
    }

    drawGrid() {
        for (var x = 0; x <= this.canvas.width; x += 180) {
            this.context2D.moveTo(0.5 + x + this.padding, this.padding);
            this.context2D.lineTo(0.5 + x + this.padding, this.canvas.height + this.padding);
        }

        for (var x = 0; x <= this.canvas.height; x += 200) {
            this.context2D.moveTo(this.padding, 0.5 + x + this.padding);
            this.context2D.lineTo(this.canvas.width + this.padding, 0.5 + x + this.padding);
        }

        this.context2D.lineWidth = 0.2;
        this.context2D.strokeStyle = "black";
        this.context2D.stroke();
    }

    drawBlock(x, y, width, height, text, backgroudcolor, bordercolor) {
        let zoomScale = 1;
        if (this.canvas.width <= this.canvas.height) {
            zoomScale = this.canvas.width / 720;
        } else {
            zoomScale = this.canvas.height / 720;
        }
        this.context2D.fillStyle = backgroudcolor;
        this.context2D.fillRect(x, y, width, height);
        this.context2D.strokeStyle = bordercolor;
        this.context2D.lineWidth = 3;
        this.context2D.strokeRect(x, y, width, height);
        // context2D.fillStyle = textcolor;
        this.context2D.fillText(text, x + width / 7 + 40 * zoomScale, y + height / 2);
    }

    drawMapInfo(scaleX, scaleY, offsetX, offsetY) {
        for (var i = 0; i < this.MAPINFO.length; i++) {
            this.drawBlock(this.MAPINFO[i].x, this.MAPINFO[i].y, this.MAPINFO[i].width, this.MAPINFO[i].height, this.MAPINFO[i].title, this.MAPINFO[i].color, this.MAPINFO[i].bordercolor);
            console.log(this.MAPINFO[i].x, this.MAPINFO[i].y, this.MAPINFO[i].width, this.MAPINFO[i].height, this.MAPINFO[i].title, this.MAPINFO[i].color, this.MAPINFO[i].bordercolor);
        }
    }

    init() {
        this.canvas = this.refs.indoormap;
        this.context2D = this.canvas.getContext('2d');

        this.canvas.width = 1080;
        this.canvas.height = 1175;
        this.padding = 0;
    }

    drawCircle() {
        this.context2D .clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.circles.length; i++) {
            var c = this.circles[i];
            this.context2D.beginPath();
            this.context2D.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
            this.context2D.closePath();
            this.context2D.fill();
            this.context2D.stroke();
        }
    }

    userLocations() {
        this.state.users.map(user => {
            this.context2D.fillStyle = "#FF0000";
            this.context2D.beginPath();
            this.context2D.arc(user.x.toFixed(1) * 50, 700 - (user.y.toFixed(1) * 50), 10, 0, Math.PI * 2);
            this.context2D.fill();
            this.context2D.closePath();
            this.context2D.stroke();
        })
    }

//     animate() {
//         if (this.state.frameCount < 160) {
//             requestAnimationFrame(this.animate);
//         }
//         this.circles[0].x += 1;
//         this.circles[1].y += 1;
//         this.drawCircle();
//         this.setState((prevState, props) => {
//             return { frameCount: prevState.frameCount + 1 }
//         });    
//   }

    render() {
        return (
            <canvas ref="indoormap" />
        );
    }
}

export default App;

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Tooltip } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

// import css file
import './progressBar.scss';

function ProgressBar() {
    const data01 = [
        { name: 'Users', value: 22 },
        { name: 'Hotels', value: 32 },
        { name: 'Rooms', value: 18 },
        { name: 'Blogs', value: 19 },
        { name: 'Balance', value: 20 },
    ];

    return (
        <div className="progress_bar">
            <div className="top">
                <p>Total Revenue</p>
                <MoreVertOutlinedIcon />
            </div>

            <div className="middle">
                <div className="progress">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={600} height={600}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#111"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p>Total sales made today.</p>
                <p className="price">
                    <AttachMoneyOutlinedIcon style={{ fontSize: '32px' }} />
                    666
                </p>
            </div>

            <div className="bottom">
                <p>Previous transection processing. Last payments may not be included.</p>

                <div className="botom_nested">
                    <div className="nested_nested">
                        <p>Last Week</p>
                        <p className="pricee">
                            <KeyboardArrowUpOutlinedIcon /> $11.9k
                        </p>
                    </div>
                    <div className="nested_nested">
                        <p>Last Month</p>
                        <p className="pricee decrese">
                            <KeyboardArrowUpOutlinedIcon /> $12.4k
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;

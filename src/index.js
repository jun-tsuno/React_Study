import React from "react";
import {createRoot} from "react-dom/client";
import { faker } from '@faker-js/faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import './App.css';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure to publish your post?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4;45PM"
                    comment="Nice post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4;00PM"
                    comment="Good post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 4;40PM"
                    comment="I like this post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Tom"
                    timeAgo="Today at 3;45PM"
                    comment="Fantastic post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />)


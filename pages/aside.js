import React from 'react';
export default function Aside({ projects }) {
    return (
        <>
            <h3>コンテンツ</h3>
            <ul>
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <a href={`${project.path}`}>{project.name}</a>
                        </li>
                    );
                })}

                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
        </>
    )
}
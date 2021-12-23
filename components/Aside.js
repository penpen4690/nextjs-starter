import React from 'react';
export default function Aside({ projects }) {
    return (
        <>
            <h3>コンテンツ</h3>
            <ul>
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <a href={`/contents/${project.slug}`}>{project.name}</a>
                        </li>
                    );
                })}

                <li>
                    <a href="/">HOME</a>
                </li>
            </ul>
        </>
    )
} 
import React from 'react';
import styles from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) { //pagesCount
        pages.push(i)
    }
    return (
            <div>
                {pages.map((p, index) => {
                    return (
                        <span
                            className={(currentPage === p) ? styles.selectedPage : undefined}
                            key={index}
                            onClick={() => {
                                onPageChanged(p)
                            }}
                        >{p}</span>)
                })}
            </div>
    )}

export default Paginator

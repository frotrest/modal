import { Component } from 'react';
import clsx from 'clsx';
import styles from './modal.module.css'

export default class Modal extends Component {
    render () {
        if(!this.props.show) return null;
        return (
            <div className={clsx(styles.modalOverlay)}>
                <div className={clsx(styles.modal)}>
                    <h2 className={clsx(styles.modalTitle)}>Модальне вікно</h2>
                    <p className={clsx(styles.modalItem)}>Закрити вікно можете на хрестик</p>
                    <button onClick={this.props.onClose} className={clsx(styles.modalBtn)}>Закрыть</button>
                </div>
            </div>
        );
    }
}
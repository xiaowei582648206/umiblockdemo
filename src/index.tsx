import React from 'react';
import styles from './index.css';

const Block: React.FC = () => {
    return (
        <div className={styles.normal}>
            <h1>I am a umi block!</h1>
            <h1>这是我的第一个自己开发的block区块</h1>
        </div>
    );
};

export default Block;

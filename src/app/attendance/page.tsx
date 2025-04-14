'use client'

import { useState } from 'react';
import styles from './page.module.scss';

export default function AttendancePage() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: API 호출로 출석 정보 저장
      setIsSubmitted(true);
      setName('');
    } catch (error) {
      console.error('Error submitting attendance:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>러닝 크루 출석</h1>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <p>출석이 완료되었습니다!</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className={styles.button}
            >
              다시 입력하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요"
                required
              />
            </div>
            <button 
              type="submit" 
              className={styles.button}
              disabled={!name.trim()}
            >
              출석하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 
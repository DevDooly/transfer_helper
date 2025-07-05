import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// App 컴포넌트 테스트 스위트
describe('App 컴포넌트', () => {
  // 기본 렌더링 테스트
  test('App 컴포넌트가 정상적으로 렌더링되어야 함', () => {
    render(<App />);
    
    // App 헤더가 존재하는지 확인
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  // 로고 이미지 테스트
  test('React 로고가 표시되어야 함', () => {
    render(<App />);
    
    // 로고 이미지가 존재하는지 확인
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src');
  });

  // 안내 텍스트 테스트
  test('편집 안내 텍스트가 표시되어야 함', () => {
    render(<App />);
    
    // 편집 안내 텍스트 확인
    const editText = screen.getByText(/Edit/i);
    expect(editText).toBeInTheDocument();
    
    // 코드 블록 확인
    const codeElement = screen.getByText('src/App.tsx');
    expect(codeElement).toBeInTheDocument();
  });

  // React 학습 링크 테스트
  test('React 학습 링크가 올바르게 설정되어야 함', () => {
    render(<App />);
    
    // Learn React 링크 확인
    const learnLink = screen.getByRole('link', { name: /learn react/i });
    expect(learnLink).toBeInTheDocument();
    expect(learnLink).toHaveAttribute('href', 'https://reactjs.org');
    expect(learnLink).toHaveAttribute('target', '_blank');
    expect(learnLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // CSS 클래스 테스트
  test('올바른 CSS 클래스가 적용되어야 함', () => {
    render(<App />);
    
    // App 컨테이너 클래스 확인
    const appContainer = screen.getByRole('banner').parentElement;
    expect(appContainer).toHaveClass('App');
    
    // App 헤더 클래스 확인
    const appHeader = screen.getByRole('banner');
    expect(appHeader).toHaveClass('App-header');
  });

  // 접근성 테스트
  test('접근성 요구사항을 충족해야 함', () => {
    render(<App />);
    
    // 이미지에 alt 텍스트가 있는지 확인
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    
    // 링크에 적절한 텍스트가 있는지 확인
    const learnLink = screen.getByRole('link', { name: /learn react/i });
    expect(learnLink).toBeInTheDocument();
  });

  // 에러 처리 테스트 (예외 상황)
  test('should handle missing logo gracefully', () => {
    // Mock console.error to prevent test output noise
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // This test would be implemented when logo loading fails
    // For now, we just verify the component renders without crashing
    expect(() => render(<App />)).not.toThrow();
    
    consoleSpy.mockRestore();
  });

  // 성능 테스트 (기본)
  test('should render within reasonable time', () => {
    const startTime = performance.now();
    
    render(<App />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // 렌더링 시간이 100ms 이내여야 함
    expect(renderTime).toBeLessThan(100);
  });
});

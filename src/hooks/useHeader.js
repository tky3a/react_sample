// カスタムフック（サンプル）
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHeader = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log('実行された', initialProps);
  // }, [initialProps]);

  // タイトルクリック
  const onClickTitle = useCallback(({ url = '/' }) => {
    console.log('ヘッダーのタイトルをクリック');
    return navigate(url);
  }, [navigate]);

  // 設定した関数を返す
  return { onClickTitle };
};

export default useHeader;

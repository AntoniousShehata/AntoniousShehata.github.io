import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="text-center p-4">
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export default App;
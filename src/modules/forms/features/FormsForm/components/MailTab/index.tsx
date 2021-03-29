import React from 'react';

const MailTab: React.FC = () => {
  return (
    <>
      <h2>Настройка почтового шаблона</h2>
      <p className={`text--small`}>
        Допускается использовать в полях выше коды полей веб-формы, например, <code>{`{{ CONTACT_EMAIL }}`}</code>
      </p>
    </>
  );
};

export default MailTab;

import styled from 'styled-components';

const MessageContainer = styled.div`
    grid-column: 4 / span 6;
    padding: 12px;
    color:#B8C4C2;;
    border:1px solid #5D6C74;
    border-radius: 8px;
    max-width:500px;
    margin: 0 auto; 
    font-size: 14px;
    font-family: EuclidCircularA;
    
    border-radius: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    max-width: 565px;
    margin: 0px auto;
`;

const MessageHeader = styled.h4`
    font-weight: bold;
    margin-bottom: 8px;
`;

const MessageText = styled.p`
    margin-bottom: 16px;
`;

const MessageList = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
`;
const MessageListItem = styled.li`
    margin-bottom: 8px;
`;

const linkStyles = {textDecoderation: 'none', color: '#00ffbe'};

const Messages = () => {
    return (
        <MessageContainer>
          <MessageHeader>Prefer to get started locally?</MessageHeader>
          <MessageText>
            Use the <a href="https://www.mongodb.com/docs/atlas/cli/" style={linkStyles}>Atlas CLI</a> to develop with MongoDB locally and programmatically deploy to Atlas when you are ready.
          </MessageText>
          <MessageHeader>Do you want to self-manage?</MessageHeader>
          <MessageList>
            <MessageListItem>
              <a href="https://www.mongodb.com/try/download/community" style={linkStyles}>Community Edition:</a> Self-manage MongoDB with a free, source-available solution.
            </MessageListItem>
            <MessageListItem>
              <a href="https://www.mongodb.com/products/enterprise-advanced" style={linkStyles}>Enterprise Advanced:</a> Access advanced features with enterprise-grade support.
            </MessageListItem>
          </MessageList>
        </MessageContainer>
    );
};
  
export default Messages;
import { IssueStatusBadge } from '@/app/components';
import { Issue } from '@prisma/client';
import { Box, Heading, Flex, Card } from '@radix-ui/themes';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap='3' my='2'>
          <IssueStatusBadge status={issue.status as IIssueStatus} />
          <p>{issue.createdAt.toDateString()}</p>
        </Flex>
        <Card className='prose max-w-full' mt='4'>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
    </>
  );
};

export default IssueDetails;

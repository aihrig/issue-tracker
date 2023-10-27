import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Card, Flex, Heading } from '@radix-ui/themes';
import IssuesPage from '../page';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap='3' my='2'>
        <IssueStatusBadge status={issue.status as IIssueStatus} />
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;

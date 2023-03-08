import { createStyles, getStylesRef, rem } from '@mantine/core';
import { BackgroundImage, Text, Box } from '@mantine/core';
import UserCard from '@/components/Card';
import ShowDialog from '@/components/ShowDialog';

const useStyles = createStyles((theme) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    // maxWidth: rem(400),
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      // Child reference in nested selectors via ref
      [`& .${getStylesRef('child')}`]: {
        fontSize: theme.fontSizes.xs
      }
    }
  },
  child: {
    // assign ref to element
    ref: getStylesRef('child'),
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black
  }
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>create Styles demo</div>
      <Box maw={300} mx="auto">
        <BackgroundImage
          h={rem(200)}
          radius="sm"
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        >
          <Text color="#fff">
            BackgroundImage component can be used to add any content on image.
            It is useful for hero headers and other similar sections
          </Text>
        </BackgroundImage>
      </Box>
      <UserCard />
      <ShowDialog />
    </div>
  );
}

import { useDisclosure } from '@mantine/hooks';

import { Modal, Button, Group } from '@mantine/core';

export default function ShowDialog() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="This is a dialog">
        {'show me'}
      </Modal>
      <Group w="80%" m="sm">
        <Button onClick={open} fullWidth radius="md">
          Open Dialog
        </Button>
      </Group>
    </>
  );
}

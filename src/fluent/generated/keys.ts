import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '4ba9632013bf45bc97883c8e5eca3456'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '9700805edf1b4d8e8edff067498c5c98'
                    }
                }
            }
        }
    }
}

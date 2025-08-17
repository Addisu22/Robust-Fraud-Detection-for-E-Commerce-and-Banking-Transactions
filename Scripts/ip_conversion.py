import ipaddress

def convert_int_to_ip(ip_int):
    try:
        if ip_int is not None and not pd.isna(ip_int):
            return str(ipaddress.IPv4Address(int(ip_int)))
        else:
            return None
    except Exception as e:
        print(f"Error converting {ip_int}: {e}")
        return None
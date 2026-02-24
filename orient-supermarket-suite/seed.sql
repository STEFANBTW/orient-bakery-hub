-- 1. Create the Products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  context TEXT NOT NULL CHECK (context IN ('RETAIL', 'WHOLESALE')),
  unit TEXT,
  stock INTEGER DEFAULT 100,
  tier_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create the Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  tier TEXT DEFAULT 'BRONZE',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Seed Data (The 50 Products)
INSERT INTO products (name, price, category, context, unit, stock, tier_info, image) VALUES
-- Retail Produce
('Organic Hass Avocados', 4.99, 'Produce', 'RETAIL', NULL, 100, NULL, 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1xd2NZ3opaoe4vIhkG1KskQa5eycV1mBsXfOpf4j-MJsKt-ypLr-6_f-boyuKPonX3JvaXMTTGJY1hKM0gEqNIgAkn5V9b1TkeoiqKOc8GE1gvBAc-0rZTeFQXb2hVo2qsOMh-mQjOIQyjMOqqNlfYfFsvBlSYuCF5w-_Pq0TYPBlahOL2PCyCACTheQjxsJQIsNA5NND-7NqRH8t_thzBfpoRNDtE-gks7qVYG2cBaVC8C0IL9am7k5uv13czpM1U-14-_uj-Q9w'),
('Royal Gala Apples', 3.49, 'Produce', 'RETAIL', 'per lb', 200, NULL, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgfsUCs8ePcoWB-jJsK24PY0w0y1xlDAgOGx2atxc1wtAHM0WSonl1a7UbEA8bQYoDZPIj7TBHezFFLC8YqvU5eGxZNK8BPGZb9OSLiw5o54mP7aNy6vIumbCt4I4o25uxve7_CcUFk8OtuKRCZTrZNp0P0ptDP-gdkz9nVYJULkCza7nvzCQWZXuNvDkNj8ko1wRQaBugXeBz7hwLnbG-c1aXTXeX8IN0bx38TMGyfYxoxyTiTCWwuCcCiFcQJKSBmKjBdnHVxkdV'),
('Fresh Broccoli', 2.15, 'Produce', 'RETAIL', 'per head', 50, NULL, 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9t68yp7eD8EbfgYgN8yPh9E8fINlAf8HuLVVnTGvCD3qUc3e23T2JGun-nJP6bXRoxLvgVjcWe2ClNCdUfBufe8QcXHwnZ0OciLkZ2N8bdRmt7B9LTt6rLvk-_tylwPFTYz_ay5m83naj88w2Akuwsll5wPjike46V0BokthCbRAbULhpwLdNLYdHnfjENioDCvo1aACWNopQHcbPVAEijcfvPbTyxzofDhri5y9sDrddVVqSTvw8ukWK0tOl0fcMlOG7g3KUJAbH'),

-- Retail Pantry
('Almond Breeze Milk', 3.49, 'Dairy', 'RETAIL', '1L', 80, NULL, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbd0wFC57LwPQUOyUC38exd7j2pV9Jh0K_hLRw0yjkF5iFVsqmQz3jfBgM6_G9ZX2p6VAPIkOf-aOOXEFojpbgtgemiFiYnfzuWMcxe_MW3GkeN7U1_fuwGfrPp_Mffjm4aVHsil05PJE3o7PJg3_DDy0iQgexr7xzJPYp9S1no5rXRRZyo7BpWPEieVoHvLFrn_Nv8NF65PZWTEUQQwc7WIMR7bDeekusfqamGTmuycHFki2QQcAFevyUSfJUH8gln0PTyPBEB5MX'),
('Barilla Spaghetti', 1.99, 'Pantry', 'RETAIL', '500g', 150, NULL, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfoq8Qt1i7X_77OeMmegd2_Pq0DTvro1D9LRM41EHPXBvfhGfBUFUH9Hxz6iRXpsKH0WopOq6O_kC6qnviNMVijikGIXmg2_kEoGYs1dpOg2jDHPARVYUD9l8q5TSbVWMd66a8oJEmxm4TKvrUgiDQSj9NVd1rcUAE7R5dxHnKIrs9TFbKXLxgjuA6DVPTbfZ01F1DuQ5dl6lAIl20nZh9Y_PpPo159YTLemPsPv9zW0IBTa5E5lL9qd5UMd_feG8lscDICVmlTxgD'),

-- Wholesale
('Jasmine Rice Premium', 45.00, 'Grains', 'WHOLESALE', '20kg Bag', 500, '-10% @ 10+', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6UWHxlzXZ1fZ6YGBbT37L0xAuHSyG5BhZ9bwse3VDii426hr7S1c-HfyAe8e3yQ8NcDRTOXKRjo2Ufc3wc29_OSrYxO_MyJnBz_QS_HpxZUhr0N7aVtOYPSu8UR1hbVvS8J0cHecXDYljfh3DPNefV4iskMSlS7IXlsjbtCi2JYOlqt8iy0T-eLiVLfpWjmZHuJEmLkOm-Yw_J_jXwPk_uDmK3oH1SNX-lFqxu5AS_FVr7ddDLdjxkcHQ-qQDtQQknzrvfpaDEBi0'),
('Premium Light Soy Sauce', 32.50, 'Condiments', 'WHOLESALE', '12 x 500ml', 120, 'Standard', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZHWw2XV0MzZOvQrrXfzV3o1YDv2qpnP56aep5JGUzVrFsO3-jGk65sTxTG9F9vHz9Ajhb3nNFFLLUjR3QB6nJLGHTO6fXlxC-y9OOLyp2PSAPaH8NsV6_4zhcY-lzoQoNNUC3Vj4zWdjwlgugpjW5MF4IKquE6YkNoA3AjRQaPScDi_zyUA2HHsa--IYO2FexG9Jenz2UJJvHEQuRwpYR4Z5aGsSlpF9Aniy0ogAmWDXRyXUp7cAQQmcnOxK9hNpDeQUf-EesSS9b'),
('Coconut Milk Aroy-D', 58.00, 'Pantry', 'WHOLESALE', '24 x 400ml', 45, '-5% @ 20+', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT9KQuIVYUr7Ec4V7wTv51EM2_CbycSlfIYm9p0klfgPcNSrKfmRz8Mu3F7nnjvTaNyJt38kC-WUZYCw7SaCLgxtpCuJ6ZKLr7sobHIhy9-gZcvfnzsUvFHjyAulA41vIjx_Q3vRr4A7m6yXMOJLT0mBfIwzH2QQj8XypWLTFuuJF-XowSWS5veoQoTyDsOwqqDpfJ0YXq3wWUdAwwX51iavrxwrgzWRE464dbGsdAkk-t4NOanxsZ7O_Dbz2Z-9VMXZXXLO6lnhuw'),
('Refined Sugar', 85.00, 'Pantry', 'WHOLESALE', '50kg Sack', 200, 'Bulk', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXHoapzHeb1VAPEs6czxDQyvWwduFy91nT-Drp_8nE1SyGtHCVjAT37yLzElXag6I_iuWbvvn3rXicnFwJbZK6_saydnAr5JMl2ZAbbt-npsIKEgbZlIicshunGdLBZqV_jllJM0yZfx0ST0DcjCV9quCoxmCTuc9rl_YY47qHdhClvIqTI4MUOXqUj_YG6igsq_Y8vTNSDMW6Ns8hfeTHBVkeso2GuVsE71yVuNPrxLnmZquU1I4cQrwmOV35Ph63vhNswuB0XPz5');
